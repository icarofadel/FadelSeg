import Header from "./components/Header"
import Footer from "./components/Footer"
import { GlobalCss } from "./styles"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
