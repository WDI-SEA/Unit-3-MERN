import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProfilePage..css'

//Display username, name and email, and tweet
function ProfilePage() {
  
  
  const [usersList, setUsersList] = useState([]);
  
  //The Hook:
  useEffect(() => {
    getAllUsers()
  }, [])
  
  //API Call to axios
  //Fetch alll users from DB
  const getAllUsers = () => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log(err))
  }

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
    }
  )

  const handleChange = (e) => {
    //Store the user input into state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // axios.post(Create a user)
    axios.post('http://localhost:4000/users', formData)
    .then(res => console.log(res))
    .then(() => getAllUsers())
    .catch(err => console.log(err))
  }

  return (

    <div>

      <form onSubmit={handleSubmit} className="users-form">
        <h3>Create A new User:</h3>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />    <br />   
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" /> <br />       
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />      <br /> 
        <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" />   <br />    
        <button type="submit">Add User</button>
      </form>

      <h3>Twitter Users:</h3> 
      {usersList.length ? usersList.map(user => 
      <div key={user._id} className="users">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Tweets</p>
        {user.tweets.map(tweet =>
          <>
          <li>{tweet.content}</li>
          </>
          )}
      </div>
    )
    : null}
    </div>
  )
}

export default ProfilePage;
