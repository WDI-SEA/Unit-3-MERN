import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ProfilePage.css'

function ProfilePage() {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
          getAllUsers()
      }, [])
  
      const getAllUsers = () => {
        axios.get('http://localhost:4000/users')
        .then(res => setUsersList(res.data))
        .catch(err => console.log(err))
      }
      const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
        }
      )
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
      const handleSubmit = (e) => {
        axios.post('http://localhost:4000/users', formData)
        .then(res => console.log(res))
        .then(() => getAllUsers())
        .catch(err => console.log(err))
      }
      return (
        <div className='profile-container'>
        <form onSubmit={handleSubmit}>
          <label>Name</label><br></br>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br></br>
          <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" /><br></br>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br></br>
          <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br></br>
          <button type="submit">New User!</button>
        </form>
  
      {usersList.length ? usersList.map(user => 
        <div key={user._id}>
          User Page
          {/* <Link to={`/detail/${user._id}`} >{user._id}</Link> */}
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {user.name}'s Tweets:
        {user.tweets ? user.tweets.map(tweet => 
          <div className='tweet-container' key={tweet._id}>
            <p>{tweet.name}</p>
            <p>{tweet.content}</p>
          </div>
        ) : null}

        </div>
      )
      : null}
      </div>
    )
  }

export default ProfilePage