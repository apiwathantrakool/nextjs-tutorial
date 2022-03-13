import { useState, useRef } from 'react';
import { signupAPI } from '../../utils/api-utils';

export const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    await signupAPI(enteredEmail, enteredPassword).then((res) =>
      console.log('!!!!res:', res)
    );
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
