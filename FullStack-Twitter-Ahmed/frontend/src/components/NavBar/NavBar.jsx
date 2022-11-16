import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Signup from '../User/Signup'
import Signin from '../User/Signin'

function NavBar(props) {


  return (
    <>
    {props.isAuth ? (

      // user signed in
      <div>
        <ul className='navbar-ul'>
          
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/logout' onClick={props.onLogoutHandler}>Logout</Link></li>
        {props.user ? "Welcome " + props.user.name : null}

        </ul>
      </div>
    ) :
      // user not logged in
      <div>
      <ul className='navbar-ul'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/signin'>Signin</Link></li>
      </ul>
    </div>
    // end of ternary operator
    } 
    
    </>
  )
}

export default NavBar