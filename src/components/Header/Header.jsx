import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='logo-wrapper'>
        <img src='#' alt='logo'/> 
        <h2>The Creative Kingdom</h2>
      </div>
      <div className='nav-link-wrapper'>
        <ul className='nav-links'>
          <li className='nav-link'><a href='#'>Home</a></li>
          <li className='nav-link'><a href='#'>Profile</a></li>
          <li className='nav-link'><a href='#'>About</a></li>
          <li className='nav-link'><a href='#'>Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
