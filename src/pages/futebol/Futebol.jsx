import React, { useEffect, useState } from "react";
import './Futebol.css'
import ButtonHome from "../../components/butaohome/ButtonHome";
import Sinal from "./sinal/Sinal";
import Falso from "../../components/false/Falso";
import Timer from "../../components/Timer"

function Futebol() {
  const [control, setControl] = useState(false)
  const [timer, setTimer] = useState(false)

  function handleJogar() {
    setControl(true)
    setTimer(true)
  }

  return (
    <div className="content">
      <div className="wrapper">
        <ButtonHome />

        <div className="sinal-Futebol">
          <img className="img-Futebol" src="/imgs/Futebol.png" alt="" />
          <div className="wrapper-entrada">
            {timer && <Timer setRender={setTimer} setControl={setControl} />}
            {control ? <Sinal /> : <Falso />}
            <button onClick={handleJogar} >jogar</button>
          </div>
        </div>

        <div className="ifremeDiv">
          {/* <iframe src="https://zep.bet/" frameborder="0"></iframe> */}
        </div>
      </div>

    </div>

  );
}

export default Futebol;