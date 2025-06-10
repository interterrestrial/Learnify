// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import './Components/Navbar.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Top_Courses from './Components/Top-Courses.jsx'
import Signin from './Components/Signin.jsx'
import Signup from './Components/Signup.jsx'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Main/>
        <Top_Courses/>

        <Router>
          <Routes>
            <Route index path="/" element={<Main/>}></Route>
            <Route index path="/signin" element={<Signin/>}></Route>
            <Route index path="/signup" element={<Signup/>}></Route>
          </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
