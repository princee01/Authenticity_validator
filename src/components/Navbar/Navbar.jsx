import React from 'react'
import './Navbar.css'

function Navbar() {
  // return (
  //   <div className='header'>
  //       <div className="header_left">
  //           <img src="" alt="Logo" />
  //           <h2>AVA</h2>
  //         </div>
  //         <div className="header_right">
  //             <ul>
  //                 <li>Home</li>
  //                 <li>About Us</li>
  //                 <li>Credentials</li>
  //                 <li>Statistics</li>
  //                 <li>Login/Register</li>
  //             </ul>
  //         </div>
  //   </div>
  // )

  return (
    <nav className="navbar">
      {/* Left Section (Logo + Name) */}
      <div className="navbar-left">
        <img
          src="/logo192.png" // replace with your logo
          alt="Logo"
          className="logo"
        />
        <span className="brand">AVA</span>
      </div>

      {/* Middle Section (Links) */}
      <div className="navbar-center">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/credentials">Credentials</a>
        <a href="/statistics">Statistics</a>
      </div>

      {/* Right Section (Buttons) */}
      <div className="navbar-right">
        <a href="/login" className="login">Login</a>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar
