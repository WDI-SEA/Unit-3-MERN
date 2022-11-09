import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='navbar-ul'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}

export default Navbar