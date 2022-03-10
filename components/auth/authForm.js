import { useState, useRef } from 'react';

export const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log('!!!submitHandler: ', { enteredEmail, enteredPassword });
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' required ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor='password'>Your Password</label>
        <input type='password' id='password' required ref={passwordInputRef} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
