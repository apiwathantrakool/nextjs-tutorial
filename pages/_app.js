import '../styles/globals.css';
import { NotificationContextProvider } from '../store/notification-context';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <Component {...pageProps} />
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
