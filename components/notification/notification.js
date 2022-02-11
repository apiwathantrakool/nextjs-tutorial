import { useContext } from 'react';
import classes from './notification.module.css';
import NotificationContext from '../../store/notification-context';

export const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  PENDING: 'pending',
};

export function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === STATUS.SUCCESS) {
    statusClasses = classes.success;
  }

  if (status === STATUS.ERROR) {
    statusClasses = classes.error;
  }

  if (status === STATUS.PENDING) {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
