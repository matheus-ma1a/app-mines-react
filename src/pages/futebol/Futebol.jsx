import React from "react";
import './Futebol.css'
import ButtonHome from "../../components/butaohome/ButtonHome";

function Futebol() {
  return (
    <div className="content">
      <div className="wrapper">
      <ButtonHome/>

        <div className="sinal-Futebol">
          <img src="/public/imgs/Futebol.png" alt="" />
          <p className="confirm-Futebol" >⬛🟦🟥 Possível entrada no FOOTBALL 🟦⬜🟥</p>
          <p className="enter-Futebol" style={{ display: "inline" }} >Entre agora no FOOTBALL</p>
          <p className="sinalRandom-Futebol" style={{ display: "inline" }} >◾ ENTRAR NO 🟥 ◾</p>
          <p className="protect-Futebol" style={{ display: "inline" }}>◾ Proteger o EMPATE ◾</p>
        </div>

        <div className="ifremeDiv">
          <iframe src="https://zep.bet/" frameborder="0"></iframe>
        </div>
      </div>

    </div>

  );
}

export default Futebol;