import { useState, useRef } from 'react';
import { signupAPI } from '../../utils/api-utils';
import { signIn } from 'next-auth/react';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log('!!!!result: ', result);
      if (!result.error) {
        // set some auth state
      }
    } else {
      await signupAPI(enteredEmail, enteredPassword).then((res) =>
        console.log('!!!!res:', res)
      );
    }
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
        <button>{isLogin ? 'Sign in' : 'Sign up'}</button>
        <button onClick={() => setIsLogin(!isLogin)}>Switch method</button>
      </div>
    </form>
  );
};
