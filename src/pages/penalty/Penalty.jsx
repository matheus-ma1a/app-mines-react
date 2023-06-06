import React, { useState } from "react";
import './penatly.css'
import Timer from "../../components/Timer"
import Preload from "./Preload";
import PenaltySinal from "./PenaltySinal";


const baguncaSinal = () => {
    const classes = ['card', 'card', 'bola', 'card', 'card']
    const arrayfixo = [...classes]
    const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
    return arrayEmbaralhado
}


function Penalty() {
    const [render, setRender] = useState(false)
    const [sinal, setSinal] = useState(baguncaSinal())
    const [preload, setPreload] = useState(['card', 'card', 'card', 'card', 'card'])


    return (
        <div className="wapper-penalty">
            <div className="content-penalty">
                <div className="grid-penalty">
                    <div className="p envolvetx-penalty">
                        <p className="infoEntrada-penalty" >🎯Entrada:</p>
                        <img className="bandeiras-penalty" src="" alt="" />
                        <p className="p timer-penalty">{render ? <Timer setRender={setRender} /> : '00:00'}</p>
                    </div>

                    <div className="contentsinalEBotons-penalty">
                        <div className="contetnSinal-penalty">
                            {render ? <PenaltySinal array={sinal} /> : <Preload pre={preload} />}
                        </div>

                        <div className="wapperBtn-penalty">
                            <button
                                disabled={render ? true : false}
                                onClick={() => {

                                    setRender(!render)
                                    setSinal(baguncaSinal())
                                }}
                                className="button myButton1-penalty"
                            >HACKER SINAL</button>
                            <button className="button myButton2-penalty" ><p className="textAcessarbtn-penalty" >ACESSAR JOGO</p></button>
                        </div>
                    </div>

                </div>
                <div className="iframe-penalty">
                    <iframe className="iframe-content" src="https://go.aff.afiliadoszep.bet/6yw4h6mg" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Penalty;