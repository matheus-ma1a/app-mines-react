import React from "react";


function Preload(props) {

  return (

    <>
      <div className="waper gap-penalty">
        <div className={`div1 ${props.pre[0]}-penalty`} ></div>
        <div className= {`div2 ${props.pre[1]}-penalty`}  ></div>
      </div>

      <div className={`div3 ${props.pre[2]}-penalty`} ></div>

      <div className="wapper2 gap-penalty">
        <div className={`div4 ${props.pre[3]}-penalty`} ></div>
        <div className={`div5 ${props.pre[4]}-penalty`} ></div>
      </div>
    </>
  )


}

export default Preload;