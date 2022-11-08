import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul className="navbar-ul">
        <img className='img' src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/09/Twitter.jpg?w=2500&quality=82&strip=all&ssl=1" alt=""  height={40} />
        <p className='THENAME'>Twitter</p>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}

export default NavBar




