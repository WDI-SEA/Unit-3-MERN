import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Profile.css'


// - Display user data 
// - See all User tweets


function ProfilePage() {
  //GOAL - display all users
  const [usersList, setUsersList] = useState([])
  useEffect(() => {
    // STEP 1: API call to our backend (
      // useEffect
      // -> Hook, run immediately when the component renders
      // axios.get(.. ..localhost:4000/users) -> returns parsed json data
      // STEP 2: Take the user list data and store it in our state
      // Take response -> setState(response)
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
      email:'',
      password:''
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
    <div>
      <h1>Admin</h1>

    {/* Form - 1 Input -> content */}
      <form onSubmit={handleSubmit}>
        <label>New User</label><br />
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" /><br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
        <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br />

        <button class="createBtn" type="submit">Create user</button>
      </form>


<br /> <br />
    {/* users[].map( .. .. .) */}
    {usersList.length ? usersList.map(user => 
      <div class="user" key={user.userId}>
        <p class="content"> Name: {user.name}</p>
        <p class="content"> Email: {user.email}</p>
        <p class="content"> Username: {user.username}</p>
     <p class="content">Tweets: </p>

     <button class="editBtn">Edit user</button>

    <button class="deleteBtn">Delete user</button>
    
  

         <hr />
       </div>
    )
    : null}
    </div>
  )
}
export default ProfilePage