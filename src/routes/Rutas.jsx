import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import CompartirEstado from '../pages/CompartirEstado'
import HomePage from '../pages/HomePage'
import Hooks from '../pages/Hooks'
import Sumando from '../pages/Sumando'

const Rutas = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/hooks" element={<Hooks/>}/>
                <Route path="/sumando" element={<Sumando/>}/>
                <Route path="/compartir-estado" element={<CompartirEstado/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Rutas