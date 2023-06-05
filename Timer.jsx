import React, { useState, useEffect } from 'react';


const Countdown = ({ setRender }) => {
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

  useEffect(()=>{
    if(count == 0 ){
      setRender(false)
    }
  },[count])

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
