import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Tweet from './components/Tweet/Tweet';
import Edit from './components/Edit/Edit'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/edit/:userId' element={<Edit />}></Route>
        <Route path='/profile/:userId' element={<Profile />}></Route>
        <Route path='' element={<Home />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
