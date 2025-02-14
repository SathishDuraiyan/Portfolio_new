import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './UI/Home'
import About from "./UI/About";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  )
}

export default App