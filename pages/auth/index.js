import { AuthForm } from '../../components/auth/authForm';
import { useSession, signOut } from 'next-auth/react';

export default function Auth() {
  const { data: session, status } = useSession();
  function handleOnLogout() {
    signOut();
  }
  return status === 'loading' ? (
    <div>Loading session...</div>
  ) : (
    <div>
      {!session && <AuthForm />}
      {session && <button onClick={() => handleOnLogout()}>Log out</button>}
    </div>
  );
}
