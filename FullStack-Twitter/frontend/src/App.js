import "./App.css";
import { useState, useEffect} from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import EditPage from "./components/EditPage/EditPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";
import jwt_decode from "jwt-decode";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(() =>{
    let token = localStorage.getItem("token");

    if(token!=null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }

  }, [])

  const registerHandler = (user) => {
    axios
      .post("http://localhost:4000/users", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const onLogOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }

  const loginHandler = (cred) =>{
    axios.post("http://localhost:4000/auth/signin", cred)
    .then(res =>{
      console.log(res.data.token)

      //STORE THE TOKEN IN LOCAL STORAGE:
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token)
        let user = jwt_decode(res.data.token) //it will decode the token
        setIsAuth(true)
        setUser(user);

      }
    })
    .catch(err =>{
      console.log(err)
    })

  }


  return (
    <Router>
      <NavBar  onLogOutHandler={onLogOutHandler} isAuth={isAuth} user={user}/>
      <div className="App">
        <Routes>
          <Route path="/home" element={isAuth ? <HomePage /> : <Signin login={loginHandler}/>} />
          <Route path="/edit/:userId" element={<EditPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/signup" element={<Signup register={registerHandler} />} />
          <Route path="/signin" element={isAuth ? <HomePage/> : <Signin login={loginHandler}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
