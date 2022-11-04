import React, { Component } from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Procedures from './components/Procedures'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const proceduresArray = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals',
]

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>

        <nav>
          <Link to='/'>Home</Link> &nbsp;
          <Link to='/procedures'>Procedures</Link> &nbsp;
          <Link to='/contact'>Contact</Link> &nbsp;
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/procedures' element={<Procedures ayshay={proceduresArray}></Procedures>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>

        </Router>
      </div>
    )
  }
}
