
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Head/Header.jsx'
import MovieSlider from './Components/Slider/MovieSlider'
import Import from './Main/Allimports/Import.jsx'

function App() {
  return (
    <div className='bg-[#0B0B0B] w-full h-full'>
      <Header/>
      <MovieSlider/>
      <Import/>
      <Footer/>
    </div>
  )
}

export default App
