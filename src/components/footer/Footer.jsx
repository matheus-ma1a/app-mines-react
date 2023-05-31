import React from "react";
import './Footer.css'
import { FaVideo } from 'react-icons/fa'
import { AiFillDollarCircle, AiFillHome, AiFillMessage } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <ul className="rodape" >

        <li className="li" >
          <a className="a" href="#"><FaVideo /></a>
          <p className="texteIcons"  >aulas</p>
        </li>

        <li className="li" >
          <a className="a" href="#"><AiFillDollarCircle /></a>
          <p className="texteIcons"  >Deposito</p>
        </li>

        <li className="li home" >
          <a className="homeSvg" href="https://zep.bet/">< AiFillHome /></a>
          <p className="texteIcons" >cadastrar</p>
        </li>

        <li className="li" >
          <a className="a" href="#"><BsCurrencyDollar /></a>
          <p className="texteIcons"  >saque</p>
        </li>

        <li className="li" >
          <a className="a" href="#"><AiFillMessage /></a>
          <p className="texteIcons"  >comunidade</p>
        </li>

      </ul>
    </>
  )
}