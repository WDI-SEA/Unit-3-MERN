import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProfilePage.css'

function ProfilePage() {
  //GOAL - display all users below
  const [usersList, seusersList] = useState([])
  useEffect(() => {
    // STEP 1: API call to our backend (
      // useEffect
      // -> Hook, run immediately when the component renders
      // axios.get(.. ..localhost:4000/users) -> returns parsed json data
      // STEP 2: Take the users list data and store it in our state
      // Take response -> setState(response)
      getAllUsers()
    }, [])

    const getAllUsers = () => {
      axios.get('http://localhost:4000/users')
      .then(res => seusersList(res.data))
      .catch(err => console.log(err))
    }

    const [formData, setFormData] = useState({
      name: '',
      username:'',
      email:'',
      password:''
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
      // axios.post(Create a tweet)
      axios.post('http://localhost:4000/users', formData)
      .then(res => console.log(res))
      .then(() => getAllUsers())
      .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='peofileform'>
        <input className='input' name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br></br>
        <input className='input' name="username" value={formData.username} onChange={handleChange} placeholder="username" /><br></br>
        <input className='input' name="email" value={formData.email} onChange={handleChange} placeholder="email" /><br></br>
        <input className='input' name="password" value={formData.password} onChange={handleChange} placeholder="password" /><br></br>
        <br></br>
        <button className='submit' type="submit">submit</button>
      </form>


       {/* users[].map( .. .. .) */}
       {usersList.length ? usersList.map(user =>    
       <div key={user.userId} className='user' >
        <p> Name:  {user.name}  </p>
        <p>username: {user.username}</p>
        <p> email: {user.email}</p>
        <p>Tweets:</p>
        {user.tweets.map(tweet => 
        <>
          <li> {tweet.content}</li>
        </>
          )}
        </div>
        ): null}   



    </div>
  )
}

export default ProfilePage