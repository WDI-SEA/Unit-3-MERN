import "./App.css";
import About from "./components/About/About.jsx";
import ContactMe from "./components/ContactMe/ContactMe";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Skills from "./components/Skills/Skills";
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {

const [state, setSate] = useState({
  pInfo: ["Anwaar Mohamed", "Software Engineering"],
  hardSkills: ["Html", "CSS", "JavaScript", "Node.js", "React.js"],
  softSkills: ["Team Working", "Punctual", "Leadership", "Detail Oriented"],
  contact:['https://github.com/', 'https://www.linkedin.com/', '+97333300000'],
  about: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aut id maxime iure eos ipsum. Dolorem quod ipsa consequatur, error magni praesentium rerum nihil quaerat, hic esse placeat! Fuga, necessitatibus." 
})

  return (
    <div className="App">
      <Router>
        {/* The Links: */}
        <nav>
          <Link to="/profile">Profile</Link> &nbsp;
          <Link to="/skills">Skills</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/contactMe">ContactMe</Link> &nbsp;
          <div className="nav-div">
            <Link to="/">SignUp</Link> &nbsp; &nbsp;
            <Link to="/login">Login</Link> &nbsp;
          </div>
        </nav>
        

        {/* The Routes: */}
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile info={state.pInfo}/>}></Route>
          <Route path="/skills" element={<Skills hSkills={state.hardSkills} sSkills={state.softSkills}/>}></Route>
          <Route path="/about" element={<About about={state.about}/>}></Route>
          <Route path="/contactMe" element={<ContactMe contact={state.contact}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Done By: Anwaar®.
