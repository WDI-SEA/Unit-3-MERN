import React, { useEffect, useState } from 'react'
import axios from 'axios'


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

  return (
    <div>
      <h1>Admin</h1>
      <p>list of users with their data, delete user, update user</p>
      <p>for for creating new user</p>




<br /> <br />
    {/* users[].map( .. .. .) */}
    {usersList.length ? usersList.map(user => 
      <div class="user" key={user.userId}>
        <p> Name: {user.name}</p>
        <p> Email: {user.email}</p>
        <p> Username: {user.username}</p>
       </div>
    )
    : null}
    </div>
  )
}
export default ProfilePage