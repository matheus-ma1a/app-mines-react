import React, { useState, useEffect } from 'react';

const Countdown = (props) => {
  const [count, setCount] = useState(10); // Tempo em segundos (3 minutos = 180 segundos)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          props.setRender(false)
          return 0;
        }
      });
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (

    <p>{formatTime(count)}</p>

  );
};

export default Countdown;
