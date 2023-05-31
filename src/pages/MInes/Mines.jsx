import React, { useState } from "react";
import './Mines.css'
import MinerGrid from "./MinerGrid/MineGrid";
import MinesPreload from "./MinerPreload/MinesPreload";

const [render, serRender] = useState(false)

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
const sinal = [...loadSinal()]

function condRender() {
  if (render === 'true') {
    return (
      sinal.map((linha, index) => {
        return (
          <MinerGrid srcFoto={linha} />
        )
      })
    )
  } else {
    circulosEstrelas.map((Element) => {
      return (
        <MinesPreload srcFoto={circulosEstrelas[0]} />
      )
    })
  }
}

function Mines() {
  return (
    <div className="content">
      <div className="main">
        <div className="wpper">
          <div className="info-play">
            <p className="tentativas">3 tentativas</p>
            <p className="qtminas">💣5 minas</p>
            <p className="valido-ate">Válido ate:</p>
            <p className="wapper-hora">00:00</p>
            <p className="entreNoJogo">👇Entre no Jogo Abaixo👇</p>
          </div>
          <div className="wpper-sinal">
            <div className="grid">
            condRender()
            </div>
            <div className="wapperBtn">
              <button onClick={loadSinal} className="geraSinal">HACKEAR SINAL</button>
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