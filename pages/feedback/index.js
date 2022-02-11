import { useState, useContext } from 'react';
import { getFeedbacksAPI, addNewFeedbackAPI } from '../../utils/api-utils';
import NotificationContext from '../../store/notification-context';
import Notification, {
  STATUS,
} from '../../components/notification/notification';
import { API_STATUS } from '../../constants/api-constants';

export default function Feedback(props) {
  const { feedbacks = [] } = props;
  const { notification, showNotification, hideNotification } =
    useContext(NotificationContext);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const getStatus = (apiStatus) => {
    const status = {
      [API_STATUS._201]: STATUS.SUCCESS,
      [API_STATUS._200]: STATUS.SUCCESS,
    };
    return status[apiStatus] || STATUS.ERROR;
  };

  const onSubmit = async () => {
    showNotification({
      title: name,
      message,
      status: STATUS.PENDING,
    });
    const response = await addNewFeedbackAPI(name, message);
    showNotification({
      title: name,
      message,
      status: getStatus(response?.status),
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
