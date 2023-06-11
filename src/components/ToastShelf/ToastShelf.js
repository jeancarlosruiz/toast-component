import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({deleteToast}) {
  const {toasts} = React.useContext(ToastContext)
  return (
    <ol 
    className={styles.wrapper}
    role='region'
    aria-live='polite'
    aria-label='Notifications'
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant} deleteToast={deleteToast}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
