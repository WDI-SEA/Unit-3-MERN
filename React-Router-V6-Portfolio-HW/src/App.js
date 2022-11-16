import logo from './logo.svg';
import './App.css';
//import all of your components to use them
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactMe from './pages/ContactMe/ContactMe'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Profile from './pages/Profile/Profile'
import { useState } from 'react'


function App() {

  const [state, setState] = useState({
    firstName: 'Ahmed',
    lastName: 'Al-Thawadi',
    username: 'notahmed',
    password: '123456',
    github: 'https://github.com/not9ahmed',
    contact: {
      email1: 'ahmed1@gmail.com',
      email2: 'ahmed2@gmail.com',
      phone: '11223344'
    },
    skills: ['Coding', 'Guitar', 'Learning', 'Calisthenics'],
    profile: {
      image: 'https://i.pinimg.com/736x/d0/0c/53/d00c53818a7ea08827101b7d83131687.jpg',
      profession: 'Software Engineer',
      brandState: 'Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork.'
    },
    about: 'I am ahmed and I like using MERN tech stack. Also, I enjoy listenting to music!'
  })


  return (
    <div className="App">
    <Router >

      <nav className='navbar'>
          <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/contact-me'>Contact Me</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/skills'>Skills</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/signup'>Sign Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/profile'>Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-me' element={<ContactMe contact={state.contact} />}></Route>
        <Route path='/skills' element={<Skills skills={state.skills}/>}></Route>
        <Route path='/login' element={<Login user={state} />}></Route>
        <Route path='/signup' element={<SignUp user={state} />}></Route>
        <Route path='/profile' element={<Profile profile={state.profile} />}></Route>
        <Route path='/about' element={<About about={state.about} />}></Route>
      </Routes>

    </Router>


    </div>
  );
}

export default App;
