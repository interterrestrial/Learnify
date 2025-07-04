import React from 'react'
import './Components-CSS/Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <img src='././assets/Learnify-Logo.png' id='Learnify-Logo' alt='Learnify-Logo.png'/>
        <div className="search-bar">
            <img src="././assets/Search Logo.png" alt="Search" />
            <input type="text" />
            <img src="././assets/Filter Logo.png" alt="Filter" />
        </div>
        <div className="login-signup">
            <button className='Login'>
              <Link to="/signin">Sign In</Link>
            </button>
            <button className='Signup'>
              <Link to="/signup">Sign Up</Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar