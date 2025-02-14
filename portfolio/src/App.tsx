import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './UI/Home'
import About from "./UI/About";
import Contact from "./UI/ContactMe";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App