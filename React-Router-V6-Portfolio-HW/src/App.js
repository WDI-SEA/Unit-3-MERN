import "./App.css";
import About from "./components/About/About.jsx";
import ContactMe from "./components/ContactMe/ContactMe";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* The Links: */}
        <nav>
            <Link to="/signUp">SignUp</Link> &nbsp; 
            <Link to="/login">Login</Link> &nbsp;
            <Link to="/profile">Profile</Link> &nbsp;
            <Link to="/skills">Skills</Link> &nbsp;
            <Link to="/about">About</Link> &nbsp;
            <Link to="/contactMe">ContactMe</Link> &nbsp;

        </nav>

        {/* The Routes: */}
        <Routes>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactMe" element={<ContactMe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Done By: Anwaar®.
