import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './main.css'

import Header from "./Components/Header/Header"
import Home from "./Components/Pages/Home"
import Movie from "./Components/Pages/Movie"

const App = () => {

  return (
    <div className="app_container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;