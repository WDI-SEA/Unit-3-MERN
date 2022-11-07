// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import About from './components/page/About/About'
import ContactMe from './components/page/ContactMe/ContactMe'
import Login from './components/page/Login/Login'
import Profile from './components/page/Profile/Profile'
import Signup from './components/page/SignUp/SignUp'
import Skills from './components/page/Skills/Skills'


//import all of your components to use them
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'






//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {

  const [state] = useState({
    name: ["Fuad AlShuroogi"],
    contactDetails: ['email: f@gmail.com' , ' /Mobile - 123456789'],
    aboutMe: "Generalist. Tend to build things if I'm bored or the tech doesn't do something I want."
  
  })

  return (
    <div className="App">
     <Router>
        <nav align="center">    
          <Link to="/About">About</Link> &nbsp; 
          <Link to="/Profile">Profile</Link> &nbsp; 
          <Link to="/ContactMe">Contact Me</Link> &nbsp; 
          <Link to="/Login">Login</Link> &nbsp; 
          <Link to="/Signup">Sign Up</Link> &nbsp; 
          <Link to="/Skills">Skills</Link> &nbsp; 
        </nav>
        
          <Routes>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/ContactMe" element={<ContactMe contactInfo={state.contactDetails}/>}></Route>
            <Route path="/Login" element={<Login  />}></Route>
            <Route path="/Signup" element={<Signup  />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>


          </Routes>
        </Router>
    </div>
  );
}

export default App;
