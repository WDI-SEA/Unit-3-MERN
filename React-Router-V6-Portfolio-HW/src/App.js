import logo from './logo.svg';
import './App.css';
//import all of your components to use them
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {

  const [info, setInfo] = useState({
    name: 'Layla Habib',
    title: 'Full Stack Developer',
    email: 'layla@gmail.com'
  })
  const [projects, setProjects] = useState([
    {
      title: 'tic-tac-toe',
      url: 'https://layla-baqer.github.io/sei-tic-tac-toe/'
    },
    {
      title: 'Sink or Sail',
      url: 'https://layla-baqer.github.io/Project1-Sink-or-Sail/'
    }
  ])
  const [skills, setSkills] = useState([
    'Node.js',
    'React',
    'JavaScript, HTML & CSS'
  ])
  const [contacts, setContacts] = useState({
    phone: '00973-225-567-202',
    email: 'layla@gmail.com',
    po: '855'
  })

  const [user, setUser] = useState([
    {
      name: '',
      password: ''
    }
  ])

  const [newUser, setNewUser] = useState(
    {
      name: '',
      password: ''
    }
  ) 
  const addUser = (e) => {
    e.preventDefault()
   setUser([ ...user,
    newUser
  ])
    setNewUser(
      {
        name: '',
        password: ''
      }
    )
  }
  const handleChange = (e) => {
    setNewUser({ ...newUser, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">

      <Router>
        <nav>
          <Link to='/'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/about'>About</Link>
          <Link to='/skills'>Skills</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Login
          addUser={addUser}
          newUser={newUser}
          handleChange={handleChange}
          />}></Route>

          <Route path='/signup' element={<SignUp
          addUser={addUser}
          newUser={newUser}
          handleChange={handleChange}
          />}></Route>

          <Route path='/profile' element={<Profile
          info={info}
          />}></Route>

          <Route path='/about' element={<About
          projects={projects}
          />}></Route>

          <Route path='/skills' element={<Skills
          skills={skills}
          />}></Route>

          <Route path='/contact' element={<Contact
          contacts={contacts}
          />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
