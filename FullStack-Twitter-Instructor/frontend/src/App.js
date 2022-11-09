import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditPage from './components/EditPage/EditPage'
import ProfilePage from './components/ProfilePage/ProfilePage';
import DetailPage from './components/DetailPage/DetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const registerHandler = (user) => {
    axios.post("http://localhost:4000/users", user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
  }

  const loginHandler = (cred) => {
    axios.post("http://localhost:4000/auth/signin", cred)
    .then(res => {
      console.log(res.data.token)

      // Store the token in Local Storage.
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);
        let user = jwt_decode(res.data.token);
        setIsAuth(true);
        setUser(user);
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/edit/:userId' element={<EditPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/detail/:tweetId' element={<DetailPage />} />
          <Route path='*' element={<HomePage />} />

          <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
          <Route path="/signin" element={<Signin login={loginHandler}></Signin>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
