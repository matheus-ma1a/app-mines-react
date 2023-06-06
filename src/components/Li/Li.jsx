import React from "react";
import './Li.css'

export default function Li(props) {
  return (

    <li>
      <img className="imgMines" src={props.img} alt="" />
    </li>

  )
}