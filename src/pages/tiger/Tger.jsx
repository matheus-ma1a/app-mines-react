import React from "react";
import { useEffect } from "react";
import ButtonHome from "../../components/butaohome/ButtonHome";
import './Tiger.css'

function Tiger() {

  useEffect(() => {
    document.title = 'Tiger Fortune';
  })

  return (
    <div className="content" >
      <div className="wrapper">
        <ButtonHome />
        <div className="main">
          <img src="../../../public/imgs/screen-3.webp" alt="" />
          <h1>Tiger</h1>
          <p>🐯FALHA CONFIRMADA🐯</p>
          <p>🎮Máximo de jogadas: 14</p>
          <p>⏱️Válido até: x 15:16</p>
          {/* <button onClick={} >pegar sinal</button> */}
          <p className="alerta" >SINAIS SÓ FUNCIONAM NA PLATAFORMA ABAIXO</p>
          <div className="ifrmeWapper-Mines">
            {/* <iframe src="https://zep.bet/casino/spribe-mines" frameBorder="0"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiger;

