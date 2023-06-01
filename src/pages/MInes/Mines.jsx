import React, { useState } from "react";
import './Mines.css'
import MinerGrid from "./MinerGrid/MineGrid";
import MinesPreload from "./MinerPreload/MinesPreload";
import Timer from "../../../Timer"


const circulosEstrelas = [
  '/imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png',

  'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png',
]

const loadSinal = () => {
  const arrayfixo = [...circulosEstrelas]
  const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
  return arrayEmbaralhado
}


function Mines() {
  const [render, setRender] = useState(false)
  const [sinal, setSinal] = useState(loadSinal())
 
  function handle() {
    setRender(!render)
    setSinal(loadSinal())
  }

  return (
    <div className="content">
      <div className="main">
        <div className="wpper">
          <div className="info-play">
            <p className="tentativas">3 tentativas</p>
            <p className="qtminas">💣5 minas</p>
            <p className="valido-ate">Válido ate:</p>
            <div className="wapper-hora">{render ? <Timer setRender={setRender} /> : '00:00'}</div>
            <p className="entreNoJogo">👇Entre no Jogo Abaixo👇</p>
          </div>
          <div className="wpper-sinal">
            <div className="grid">
              {
                render ? <MinerGrid sinal={sinal} /> : <MinesPreload sinal={circulosEstrelas} sinalFixo={circulosEstrelas} />
              }
            </div>
            <div className="wapperBtn">
              <button disabled={ render ? true : false} onClick={handle} className="geraSinal">HACKEAR SINAL</button>
              <button className="acessarJogoBtn">
                <p className="textAcessarbtn">ACESSAR JOGO</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ifrmeWapper">
        {/* <iframe src="https://go.aff.afiliadoszep.bet/6yw4h6mg" frameBorder="0"></iframe> */}
      </div>
    </div>
  )
}

export default Mines;