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
  const [sinal, setSinal] = useState()
 
  function handle() {
    setRender(!render)
    setSinal(loadSinal())
  }

  return (
    <div className="content-Mines">
      <div className="main-Mines">
        <div className="wpper-Mines">
          <div className="info-play-Mines">
            <p className="tentativas-Mines">3 tentativas</p>
            <p className="qtminas-Mines">💣5 minas</p>
            <p className="valido-ate-Mines">Válido ate:</p>
            <div className="wapper-hora-Mines">{render ? <Timer setRender={setRender} /> : '00:00'}</div>
            <p className="entreNoJogo-Mines">👇Entre no Jogo Abaixo👇</p>
          </div>
          <div className="wpper-sinal-Mines">
            <div className="grid-Mines">
              {
                render ? <MinerGrid sinal={sinal} /> : <MinesPreload sinal={circulosEstrelas} sinalFixo={circulosEstrelas} />
              }
            </div>
            <div className="wapperBtn-Mines">
              <button disabled={ render ? true : false} onClick={handle} className="geraSinal-Mines">HACKEAR SINAL</button>
              <button className="acessarJogoBtn-Mines">
                <p className="textAcessarbtn-Mines">ACESSAR JOGO</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ifrmeWapper-Mines">
        <iframe src="https://go.aff.afiliadoszep.bet/6yw4h6mg" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default Mines;
