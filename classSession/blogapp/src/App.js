import React, { Component } from 'react'
import './App.css';
import Homepage from './components/Homepage';
import Mainblog from './components/Mainblog';
import Favoritemovie from './components/Favoritemovie';
import Favoritefood from './components/Favoritefood';
import Aboutpage from './components/Aboutpage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
      <Router>

      <nav>
        <Link to='/'>Homepage</Link> &nbsp;
        <Link to='/mainblog'>Mainblog</Link> &nbsp;
        <Link to='/favoritemovies'>Favoritemovie</Link> &nbsp;
        <Link to='/favoritefood'>Favoritefood</Link> &nbsp;
        <Link to='/about'>Aboutpage</Link> &nbsp;
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/mainblog' element={<Mainblog />}></Route>
        <Route path='/favoritemovies' element={<Favoritemovie />}></Route>
        <Route path='/favoritefood' element={<Favoritefood />}></Route>
        <Route path='/about' element={<Aboutpage />}></Route>

      </Routes>

      </Router>
      </div>
    )
  }
}
