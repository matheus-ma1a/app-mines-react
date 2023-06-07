import React from "react";
import { Link } from 'react-router-dom'

function ButtonHome() {
  return ( 
    <Link to={'/'} >
    <button>Home</button>
  </Link>
   );
}

export default ButtonHome;