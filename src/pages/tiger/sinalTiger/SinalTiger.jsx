import React, { useState } from "react";

function SinalTiger() {

  const [jogadas] = useState(["7", "8", "9", "10", "11", '12', "13", "14", "15", "16"])
  const [numaleatorio] = useState(Math.floor(Math.random() * 10))

  function horaMinutos() {
    const expiryTime = 3; // tempo de expiração em minutos
    const now = new Date();
    const expiry = new Date(now.getTime() + expiryTime * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');
  
    return hours + ':' + minutes
  
  }

  return (
    <div className="sinalTiger">
      <p>🐯FALHA CONFIRMADA🐯</p>
      <p>🎮Máximo de jogadas: {`${jogadas[numaleatorio]}`}</p>
      <p>⏱️Válido até:  {`${horaMinutos()}`}</p>
    </div>
  );
}

export default SinalTiger;