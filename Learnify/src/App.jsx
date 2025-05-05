import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Navbar.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
 
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Main/>
      </div>
      
    </>
  )
}

export default App
