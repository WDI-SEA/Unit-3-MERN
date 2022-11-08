import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditPage from './components/EditPage/EditPage'
import ProfilePage from './components/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/edit/:userId' element={<EditPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;