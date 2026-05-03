import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BookTrip from "./components/BookTrip";
import Trips from "./components/Trips";
import './App.css'

function App() {

  return (
   <BrowserRouter>
         <Routes>
           <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book-trip" element={<BookTrip />} />
            <Route path="/trips" element={<Trips />} />
         </Routes>
       </BrowserRouter>
  )
}

export default App
