import { useContext } from 'react';
import classes from './notification.module.css';
import NotificationContext from '../../store/notification-context';
import { API_STATUS } from '../../constants/api-constants';

export const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  PENDING: 'pending',
};

export const getStatus = (apiStatus) => {
  const status = {
    [API_STATUS._201]: STATUS.SUCCESS,
    [API_STATUS._200]: STATUS.SUCCESS,
  };
  return status[apiStatus] || STATUS.ERROR;
};

export function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (getStatus(status) === STATUS.SUCCESS) {
    statusClasses = classes.success;
  }

  if (getStatus(status) === STATUS.ERROR) {
    statusClasses = classes.error;
  }

  if (getStatus(status) === STATUS.PENDING) {
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
