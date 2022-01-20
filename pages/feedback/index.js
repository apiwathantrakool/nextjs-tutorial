import { useState } from 'react';
import { fetchFeedbacks } from '../../utils/api-utils';

export default function Feedback(props) {
  const { feedbacks = [] } = props;
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const onSubmit = () => {
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ name, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
            <div key={obj._id}>
              <br />
              <div>{obj._id}</div>
              <div>{obj.id}</div>
              <div>{obj.name}</div>
              <div>{obj.message}</div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const feedbacks = await fetchFeedbacks();
  return {
    props: {
      feedbacks: feedbacks,
    },
  };
}
