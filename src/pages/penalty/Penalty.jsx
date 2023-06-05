import React from "react";
import './penatly.css'

function Penalty() {
  return ( 
    <>
       <div class="content-penalty">
        <div class="grid-penalty">
            <div class="envolvetx-penalty">
                <p class="infoEntrada-penalty" >🎯Entrada:</p>
                <img class="bandeiras-penalty" src="" alt=""/>
                <p class="timer-penalty" >00:00</p>
            </div>

            <div class="contentsinalEBotons-penalty">
                <div class="contetnSinal-penalty">
                    <div class="waper gap">
                        <div class="div1 card " ></div>
                        <div class="div2 card " ></div>
                    </div>
        
                        <div class="div3 card " ></div>
        
                    <div class="wapper2 gap">
                        <div class="div4 card " ></div>
                        <div class="div5 card " ></div>
                    </div>
                </div>

                <div class="wapperBtn-penalty">
                    <button class="myButton1-penalty" >HACKER SINAL</button>
                    <button class="myButton2-penalty" ><p class="textAcessarbtn-penalty" >ACESSAR JOGO</p></button>
                </div>
            </div>

        </div>
        <div class="iframe-penalty">
            {/* <iframe src="https://go.aff.afiliadoszep.bet/6yw4h6mg" frameborder="0"></iframe> */}
        </div>
    </div>
    </>
   );
}

export default Penalty;