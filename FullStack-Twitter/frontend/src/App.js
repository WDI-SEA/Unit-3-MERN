import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditPage from './components/EditPage/EditPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import axios from 'axios';
import {useEffect, useState} from 'react'
import jwt_decode from 'jwt-decode'


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  useEffect(()=> {

    let token = localStorage.getItem("token")

    if (token != null){
      let user = jwt_decode(token);

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }

    }
  },[])

  const registerHandler =(user) =>{
    axios.post("http://localhost:4000/users", user)
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
  axios.post("http://localhost:4000/auth/signin",cred)
  .then(res => {
    console.log(res.data.token)

    //store the token in local storage
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

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }


  return (
    <Router>
    <NavBar onLogoutHandler={onLogoutHandler} isAuth={isAuth} user={user}/>
    <div className="App">
      <Routes>
        <Route path='/home' element={isAuth ? <HomePage /> : <Signin login={loginHandler}></Signin>} />
        <Route path='/edit/:userId' element={<EditPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<HomePage />} />

        <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
        <Route path="/signin" element={isAuth ? <HomePage></HomePage> : <Signin login={loginHandler}></Signin>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;