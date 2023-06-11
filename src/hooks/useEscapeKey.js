import React from 'react';

const useEscapeKey = (callBack) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === 'Escape') {
        callBack(e);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [callBack]);
};


export default useEscapeKey;