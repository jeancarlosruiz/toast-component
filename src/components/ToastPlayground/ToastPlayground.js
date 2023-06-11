import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  
console.log(toasts)

  const handleToast = (e) => {
    e.preventDefault();
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
       variant,
      }
    ]
      setToasts(nextToast)

      setMessage('')
      setVariant(VARIANT_OPTIONS[0])
    }

    const deleteToast = (id) =>{
      const nextToasts = toasts.filter(toast => {
        return toast.id !== id
      })
      setToasts(nextToasts)
    }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

   <ToastShelf toasts={toasts} deleteToast={deleteToast}/>

      <form onSubmit={handleToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={e => {
              setMessage(e.target.value);
            }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
          {VARIANT_OPTIONS.map((option) => {
            const id = `variant-${option}`;
            return(
              <label htmlFor={id} key={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={e => {
                  setVariant(e.target.value);
                }}
              />
            {option}
            </label>
            )
          }
             )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button >
            Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
