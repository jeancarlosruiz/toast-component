import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ]
      setToasts(nextToast)
  }

  const removeToast = (id) => {
  const nextToasts = toasts.filter(toast => {
    return toast.id !== id
  })
  setToasts(nextToasts)
}

  return (
    <ToastContext.Provider value={{toasts, createToast, removeToast}} >
      {children}
    </ToastContext.Provider>
  ) ;
}

export default ToastProvider;
