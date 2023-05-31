import React from "react";
import './Li.css'

export default function Li(props) {
  return (

    <li>
      <a href={props.link}>
        <img className="imgMines" src={props.img} alt="" />
      </a>

    </li>

  )
}