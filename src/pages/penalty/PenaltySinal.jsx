import React from "react";


function PenaltySinal(props) {

  // console.log(props.array[0]);

  return (

    <>
      <div className="waper gap-penalty">
        <div className={`div1 ${props.array[0]}-penalty`} ></div>
        <div className= {`div2 ${props.array[1]}-penalty`}  ></div>
      </div>

      <div className={`div3 ${props.array[2]}-penalty`} ></div>

      <div className="wapper2 gap-penalty">
        <div className={`div4 ${props.array[3]}-penalty`} ></div>
        <div className={`div5 ${props.array[4]}-penalty`} ></div>
      </div>
    </>
  )


}

export default PenaltySinal;