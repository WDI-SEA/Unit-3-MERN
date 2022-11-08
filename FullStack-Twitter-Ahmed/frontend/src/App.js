import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditPage from './components/EditPage/EditPage'
import ProfilePage from './components/ProfilePage/ProfilePage'


function App() {
  return (

    <Router>
    <NavBar />

    <div className="App">



    <Routes>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/edit/:id' element={<EditPage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='*' element={<HomePage />}></Route>
    </Routes>

    </div>
    </Router>
  );
}

export default App;
