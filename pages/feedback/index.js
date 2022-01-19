import { useState } from 'react';

export default function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const onSubmit = () => {
    console.log({ name, message });
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
    </div>
  );
}
