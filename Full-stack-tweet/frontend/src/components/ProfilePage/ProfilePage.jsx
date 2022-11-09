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

  return (
    <div>
    
       {/* users[].map( .. .. .) */}
       {usersList.length ? usersList.map(user =>    
       <div key={user.userId} className='user' >
           <br />
        <p> Name:  {user.name}  </p>
        <p>username: {user.username}</p>
        <p> email: {user.email}</p>
        <p>Tweets:</p>
        {user.tweets.map(tweet => 
        <>
          <li> {tweet.content}</li>
        </>
          )}
             <br />
        </div>
        ): null}   

    </div>
  )
}

export default ProfilePage