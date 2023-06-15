import { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const Countdown = ({ setRender, setControl }) => {
  const [count, setCount] = useState(180); // Tempo em segundos (3 minutos = 180 segundos)

  useEffect(() => {

    const timer = setInterval(() => {

      setCount((prevCount) => {

        if (prevCount == 0) {
          clearInterval(timer);
          return prevCount
        }
        return prevCount - 1;
      });

    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count == 0) {
      setRender(false)
      setControl && setControl(false)
    }
  })

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (

    <>{formatTime(count)}</>

  );
};

export default Countdown;
