import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//import all of your components to use them

//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );

function App() {
  return (
    <div>
      <Router>
        <nav>
        <Link to='/SignUp'>SignUp</Link> &nbsp;
        <Link to='/Login'>Login</Link> &nbsp;
        <Link to='/Profile'>Profile</Link> &nbsp;
        <Link to='/Skills'>Skills</Link> &nbsp;
        <Link to='/ContactMe'>ContactMe</Link> &nbsp;
        <Link to='/About'>About</Link> &nbsp;
        </nav>

        <Routes>
          <Route path='/SignUp' element ={<SignUp/>}></Route>
          <Route path='/Login' element ={<Login/>}></Route>
          <Route path='/Profile' element ={<Profile/>}></Route>
          <Route path='/Skills' element ={<Skills/>}></Route>
          <Route path='/ContactMe' element ={<ContactMe/>}></Route>
          <Route path='/About' element ={<About/>}></Route>

        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
