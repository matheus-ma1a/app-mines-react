import React, { useEffect, useState } from "react";
import './Futebol.css'
import ButtonHome from "../../components/butaohome/ButtonHome";

function Futebol() {
  const [nsei, setNaosei] = useState(false)
  const [control, setControl] = useState(false)


  function ramdCor() {
    const cor = ['🟥', '🟦', '🟦', '🟦', '🟥', '🟥', '🟥', '🟥', '🟦', '🟦', '🟦',]

    const arrayEmbaralhado = cor.sort(() => Math.random() - 0.5)
    return arrayEmbaralhado

  }


  useEffect(() => {
    const entreada = document.querySelector('.wrapper-entrada')
    setTimeout(() => {
      setNaosei(true)
    }, 5000);
    
    setTimeout(() => {
      entreada.innerHTML = '<h1>✅ GREEN ✅</h1>'
    },10000)
  },[control])


  return (
    <div className="content">
      <div className="wrapper">
        <ButtonHome />

        <div className="sinal-Futebol">
          <img className="img-Futebol" src="/imgs/Futebol.png" alt="" />
          <div className="wrapper-entrada">
            <p className="analisa-Futebol" style={{ display: nsei ? "none" : "inline" }}>🚨 ANALISANDO 🚨</p>
            <h4 className="confirm-Futebol" >🟦🟥 {nsei ? 'ENTRADA CONFIRMADA ' : 'Possível entrada no FOOTBALL'} 🟦🟥</h4>
            <p className="enter-Futebol" style={{ display: "inline" }} >Entre agora no FOOTBALL</p>
            <p className="sinalRandom-Futebol" style={{ display: nsei ? "inline" : "none" }} >◾ ENTRAR NO {`${ramdCor()[0]}`} ◾</p>
            <p className="protect-Futebol" style={{ display: nsei ? "inline" : "none" }}>◾ Proteger o EMPATE ◾</p>
          </div>
          <button onClick={()=>{setControl(!control)}} >jogar</button>
        </div>

        <div className="ifremeDiv">
          {/* <iframe src="https://zep.bet/" frameborder="0"></iframe> */}
        </div>
      </div>

    </div>

  );
}

export default Futebol;