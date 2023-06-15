import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Li from './components/Li/Li'


function App() {

  useEffect(() => {
    document.title = 'Deshboard';
  })


  return (
    <div className='wrapper-app' >

      <div className='img-slide-Home' >
        <img className='imgSLD-Home' src="imgs/imgSlide/1.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/10.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/11.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/2.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/3.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/5.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/9.png" alt="" />
      </div>

      <header>
        <p className='p1-Home' >ESCOLHA A MELHOR OPÇÃO</p>
        <p className='p2-Home' >PARA LUCRAR AGORA</p>
      </header>

      <ul>
        <Link to={'/mines'} >
          <Li img='../imgs/mines.jpg' />
        </Link>

        <Link to={'/penalty'} >
          <Li img='../imgs/penalty.jpg' />
        </Link>

        <Link to={'/Futebol'} >
          <Li img='../imgs/Futebol.png' />
        </Link>

        <Link to={'/Tiger'} >
          <Li img='/imgs/Tiger.jpg' />
        </Link>
        
      </ul>

      <Footer />

    </div>
  )
}

export default App
