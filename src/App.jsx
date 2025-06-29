// este es un estilo global, este aplica a todo el proyecto
import './App.css'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
// import Card from './components/Card'

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Owner" element={<Owner />} />
      </Routes>
    </>
  )
}

export default App