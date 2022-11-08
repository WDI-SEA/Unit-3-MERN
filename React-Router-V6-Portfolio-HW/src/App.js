import logo from './logo.svg';
import './App.css';
import Login from './components/ Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import  ContactMe from './components/ContactMe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
  let [state, setState] = useState({
    AProfile: ['Shaikha Albuflasa','Chemical Engineer / Software Engineer'],
    AAbout:['An passionate chemical engineer with outstanding software engineering abilities who is motivated to evolve. Has the ability to technical and a thorough understanding of chemical transform processes and to develop front-end websites in the chemical industry. Has interested in learing new programming languages.'],
    TECHNICALSKILLS: ['HTML','CSS','JavaScript','MATLAB','Aspen HSYSY',' RStudio','Polymath'],
    SOFTSKILLS:['Solve Problems', 'Critical Thinker', 'Time Management' , 'Independent' , 'Critical Thinker' ,'Communication' ],
    AContactMe:['6235673','shaikhasaad86@gmail.com','https://github.com/shaikhaalbflasa','https://www.linkedin.com/in/shaikha-albuflasa/']
  
    
  })
  return (
    <div className="App">
       <Router>
        <nav className='nav'>
         <Link to="/Profile">Profile </Link> &nbsp;
         <Link to="/About">About</Link> &nbsp;
         <Link to="/Skills">Skills </Link> &nbsp;
         <Link to="/ContactMe">ContactMe </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to="/Login">Login  </Link> &nbsp;
         <Link to="/SignUp">SignUp</Link> &nbsp;
         </nav>
          <Routes>
            <Route path='/Login' element={<Login />} ></Route>
            <Route path='/SignUp' element={<SignUp  />} ></Route>
            <Route path='/Profile' element={<Profile AProfile={state.AProfile}/>} ></Route>
            <Route path='/About' element={<About AAbout={state.AAbout} />} ></Route>
            <Route path='/Skills' element={<Skills  TSkills={state.TECHNICALSKILLS} SSkills={state.SOFTSKILLS} />} ></Route>
            <Route path='/ContactMe' element={<ContactMe AContactMe={state.AContactMe}/>} ></Route>
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;

