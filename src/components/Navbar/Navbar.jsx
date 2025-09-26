import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src="" alt="Logo" />
            <h2>AVA</h2>
          </div>
          <div className="header_right">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Credentials</li>
                  <li>Statistics</li>
                  <li>Login/Register</li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar
