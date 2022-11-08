import React from "react";
import './NavBar.css'
import {Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul className="navbar-ul">
      <h3 className="twitter">Twitter</h3>
        <li><Link to='home' >Home</Link></li>
        <li><Link to='profile'>Profile</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
