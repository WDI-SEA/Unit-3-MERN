import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'
// importing components
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Login from "./components/Login"
import Profile from "./components/Profile"
import SignUp from "./components/SignUp"
import Skills from "./components/Skills"
import { useState } from 'react';
//import all of your components to use them


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {
  let [state, setState]=useState({contacts:{email:"amiraabdullamir@gmail.com",telNo:"35674087"},about:"this is a skeleton app to demonstrate react router", skills:["HTML/CSS","React","Nodejs"], profile:{username:"test",password:"test"}})
  return (
    <div className="App">
    <Router>
      <nav>
        <Link to="/about" >About</Link>
        <Link to="/contact-me">Contact Me</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/skills">Skills</Link>
      </nav>
      <Routes>
        <Route element={<About about={state.about}/>} path="/about"></Route>
        <Route element={<ContactMe contacts={state.contacts}/>} path="contact-me"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Profile info={state.profile}/>} path="/profile"></Route>
        <Route element={<SignUp/>} path="/sign-up"></Route>
        <Route element={<Skills skills={state.skills}/>} path="/skills"></Route>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
