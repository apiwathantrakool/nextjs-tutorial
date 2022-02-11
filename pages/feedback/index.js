import { useState, useContext } from 'react';
import { getFeedbacksAPI, addNewFeedbackAPI } from '../../utils/api-utils';
import NotificationContext from '../../store/notification-context';
import Notification from '../../components/notification/notification';

export default function Feedback(props) {
  const { feedbacks = [] } = props;

  const { notification, showNotification, hideNotification } =
    useContext(NotificationContext);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    const response = await addNewFeedbackAPI(name, message);
    showNotification({
      title: name,
      message,
      status: response?.status,
    });
  };
  return (
    <div>
      <h1>Feedback page</h1>
      <div>
        <h2>Add new feedback</h2>
        <input
          type='text'
          id='name'
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          id='message'
          rows='4'
          cols='50'
          placeholder='Your message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={onSubmit}>Submit</button>
      </div>

      <div>
        <h2>Feedback list</h2>

        {feedbacks.map((obj) => {
          return (
            <div key={obj.id}>
              <br />
              <div>{obj.id}</div>
              <div>{obj.name}</div>
              <div>{obj.message}</div>
              <br />
            </div>
          );
        })}
      </div>

      {notification && (
        <Notification
          title={notification?.title}
          message={notification?.message}
          status={notification?.status}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const feedbacks = await getFeedbacksAPI();
  return {
    props: {
      feedbacks: feedbacks,
    },
  };
}
