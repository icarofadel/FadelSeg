import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalCss } from "./styles"
import logofundo from '../src/assets/FadelSeg/path1.png'

function App() {

  return (
    <>
      <GlobalCss/>
      <Header />
      <img className="logo" src={logofundo}/>
      <Footer/>
    </>
  )
}

export default App
