import React from "react";
import { useState } from "react";

function Sinal() {
  const [visibilidade, setVisibilidade] = useState(false)


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
