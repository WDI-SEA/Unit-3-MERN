import React from "react";
import './NavBar.css'
import {Link } from 'react-router-dom'

function NavBar(props) {
  return (
   <>
   {props.isAuth ? (
    <div>
    <ul className="navbar-ul">
    <h3 className="twitter">Twitter</h3>
      <li><Link to='home' >Home</Link></li>
      <li><Link to='profile'>Profile</Link></li>
      <li><Link to="/logout" onClick={props.onLogOutHandler}>Logout</Link></li>
      {props.user ? "Welcome " + props.user.user.name: null}
    </ul>
  </div>
   ): (<div>
    <ul className="navbar-ul">
    <h3 className="twitter">Twitter</h3>
      <li><Link to='home' >Home</Link></li>
      <li><Link to='profile'>Profile</Link></li>
    
      <li><Link to="/signup">SignUp</Link></li>
      <li><Link to="/signin">SignIn</Link></li>
    </ul>
  </div>)}
   
   </>
  );
}

export default NavBar;




