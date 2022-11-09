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


  return (

    <div>

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
