import Hero from "./components/Hero"
import "./App.scss"
import Nav from "./components/Navbar"
import Aside from "./components/Aside"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Admin from "./pages/Admin/admin"


function App() {
  const { pathname } = useLocation();
  return (
    <>
      {
        !pathname.includes("/admin") && <Hero /> 
      }
      {
        !pathname.includes("/admin") && <Nav /> 
      }
      {
        !pathname.includes("/admin") && <Aside /> 
      }
      {
        !pathname.includes("/admin") && <Header /> 
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {
        !pathname.includes("/admin") && <Footer /> 
      }
    </>
  )
}

export default App
