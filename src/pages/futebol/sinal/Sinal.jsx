/* eslint-disable no-unused-vars */
import React from "react";

function Sinal() {

  function ramdCor() {
    const cor = ['🟥', '🟦', '🟦', '🟦', '🟥', '🟥', '🟥', '🟥', '🟦', '🟦', '🟦',]

    const arrayEmbaralhado = cor.sort(() => Math.random() - 0.5)
    return arrayEmbaralhado

  }

  return (
    <>
      <h1 className="enter-Futebol" style={{ display: "inline" }} >Entre agora no FOOTBALL</h1>
      <h3 className="sinalRandom-Futebol">◾ ENTRAR NO {`${ramdCor()[0]}`} ◾</h3>
      <h3 className="protect-Futebol">◾ Proteger o EMPATE ◾</h3>
    </>
  );
}

export default Sinal
