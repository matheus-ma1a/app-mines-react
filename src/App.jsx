import './App.css'
import Footer from './components/footer/Footer'
import Li from './components/Li/Li'


function App() {

  return (
    <>

      <div className='img-slide' >
        <img className='imgSLD' src="../imgs/imgSlide/1.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/10.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/11.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/2.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/3.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/5.png" alt="" />
        <img className='imgSLD' src="../imgs/imgSlide/9.png" alt="" />
      </div>

      <header>
        <p>ESCOLHA A MELHOR OPÇÃO</p>
        <p>PARA LUCRAR AGORA</p>
      </header>

      <ul>
        <Li img='../imgs/mines.jpg' link='https://hackerdacasa.online/jogo/jogo.html' />
        <Li img='../imgs/penalty.jpg' link='https://hackerdacasa.online/penalty/penalty.html' />
        <Li img='../imgs/studio.png' link='#' />
      </ul>

      <Footer />

    </>
  )
}

export default App
