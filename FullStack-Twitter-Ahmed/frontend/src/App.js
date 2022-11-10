import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditPage from './components/EditPage/EditPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Signup from './components/User/Signup';
import Signin from './components/User/Signin';
import axios from 'axios'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'

function App() {


  // state to check if user is auth or not
  const [isAuth, setIsAuth] = useState(false)

  // state to store the user form data
  const [user, setUser] = useState({})



  // on componenent load check if the token is found / user logged in
  useEffect(() => {

    let token = localStorage.getItem("token")

    // if token exists
    if(token != null) {

      // decode the token to get the userId
      let user = jwt_decode(token);


      // accessing inside user object inside the payload that was in the backend
      user  = user.user


      console.log(user)


      // if user exists
      if(user){


        setIsAuth(true);
        setUser(user);

        // user is not found
      } else if (!user) {

        // delete the token
        localStorage.removeItem("token");

        // set that the user is not auth
        setIsAuth(false);
      }
    }


  }, [])
  // [] is dependeicies to use inside useEffect / values to pass values to useEffect


  // to handle sign up and send user data to backend
  const registerHandler = (user) => {
    axios.post('http://localhost:4000/users', user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // to handle login and send the credintials to backeb
  const loginHandler = (cred) => {
    axios.post('http://localhost:4000/auth/signin', cred)
    .then(res => {

      // getting the token from the backend
      console.log(res.data.token)

      // store the token in local storage
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);

        // decode the token from the backend
        // will store the payload from the backend
        let user = jwt_decode(res.data.token)

        // update that isAuth state so that the user is authenticated
        setIsAuth(true);

        // update the user state with the user id
        setUser(user)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  // to handle logout
  const onLogoutHandler = (e) => {

    // stop page refresh
    e.preventDefault();

    // remove the token from the local storage
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }

  return (

    <Router>
    <NavBar onLogoutHandler={onLogoutHandler} isAuth={isAuth} user={user}/>

    <div className="App">



    <Routes>
      <Route path='/home' element={ isAuth ? <HomePage /> : <Signin login={loginHandler} />}></Route>
      <Route path='/edit/:id' element={<EditPage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      {/* <Route path='/detail/:' element={<DetailPage />}></Route> */}
      <Route path='*' element={<HomePage />}></Route>

      <Route path='/signup' element={<Signup register={registerHandler} />}></Route>

      {/* will redirect the user to homepage if he's logged in. Otherwise, redirect to sign in */}
      <Route path='/signin' element={isAuth ? <HomePage /> : <Signin login={loginHandler} />}></Route>
    </Routes>

    </div>
    </Router>
  );
}

export default App;
