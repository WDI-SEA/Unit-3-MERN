import React, { Component } from 'react'

import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Skills from './components/Skills'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
           

            <Link to="/Login" class='navbar' >Login</Link>&nbsp;
            <Link to="/Signup" class='navbar'>Sign up</Link>&nbsp;
            <Link to="/Profile" class='navbar'>Profile</Link>&nbsp;
            <Link to="/About" class='navbar'>About</Link>&nbsp;
            <Link to="/Skills" class='navbar'>Skills</Link>&nbsp;
            <Link to="/Contact" class='navbar'>Contact me</Link>&nbsp;
          </nav>
          <Routes>
           
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>

    
      </div>
    )
  }
}
