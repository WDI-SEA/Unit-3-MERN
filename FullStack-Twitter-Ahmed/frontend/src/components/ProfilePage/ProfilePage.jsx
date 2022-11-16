import React, { useEffect, useState } from 'react'
import './ProfilePage.css'
import axios from 'axios'

function Profile() {



  // get the user data
  const [userData, setUserData] = useState({
    name: '', 
    username: '',
    email: '',
    password: '',
    tweets: []
  })

  useEffect(() => {
    axios.get('http://localhost:4000/users/6369423ac50f06895ff46dea')
    .then(res => setUserData({
      name: res.data.name, 
      username: res.data.username,
      email: res.data.email,
      password: res.data.password,
      tweets: res.data.tweets
    }))
    .catch(err => console.log(err))
  })



  // get all my tweets
  // const [tweetsList, setTweetsList] = useState([])


  // // fetch the user data
  // useEffect(() => {

  //   axios.get('http://localhost:4000/tweets/6369423ac50f06895ff46dea')
  //   .then(res => setTweetsList(res.data))
  //   .catch(err => console.log(err))

  // })


  const tweets = userData.tweets.map((tweet,idx) =>
    <div style={{border: '2px solid red'}} key={'tweet-'+idx}>
      <h4 key={'tweetName'+idx}>{tweet.name}</h4>
      <h4 key={'tweetContent'+idx}>{tweet.content}</h4>
    </div>
  )
  


  // get the user data
  const [allUsersData, setAllUsersData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:4000/users')
    .then(res => setAllUsersData(res.data))
    .catch(err => console.log(err))
  })


  // const [updatedUserData, setUpdatedUserData] = useState

  // const handleUpdate = (e) => {
  //   // axios.delete(`http://localhost:4000/tweets/`)
  // }

  const handleUserDelete = (e) => {

    // handle the newUpdatedData
    e.preventDefault()
    console.log(e.target.name)
  }

  return (
    <div>

      {/* display user data and tweets */}
      { userData ? 
      <>
      <h1>THe current user</h1>
      <h2>{ userData.name }</h2> 
      <h2>{ userData.username }</h2> 
      <h2>{ userData.email }</h2> 
      <h2>{ userData.password }</h2>


      <div style={{border: '2px solid blue'}}>

      <h2>My Tweets:</h2>
      {tweets}

      </div>
      
      </>
      : null}
      

      {/* Display all users data and their tweet */}
      
      <div style={{border: '2px solid green'}}>

      <h1>All users data</h1>
      { allUsersData.map((user, idx) => 
      <div key={'user-div-'+idx} style={{border: '2px solid red'}}>
        <h1>User {(idx+1)}</h1>
      <h4 key={'name-'+idx}>{user.name}</h4>
      <h3 key={'username-'+idx}>{user.username}</h3>
      <h3 key={'email-'+idx}>{user.email}</h3>
      <h3 key={'pass-'+idx}>{user.password}</h3>
      
      <form onSubmit={handleUserDelete}>
        {/* delete user will make api call */}
        <input type='hidden' name='userID' value={user._id} />
        <button type='submit'>Delete!</button>
      </form>

      <h1>Tweets</h1>
      {user.tweets.map((tweet, idx) =>
      <div key={'tweet-div-'+idx} style={{border: '2px solid orange'}}>
        <h3 key={'tweet-label-'+idx}>Tweet {(idx+1)}</h3>
        <p key={'tweet-name-'+ idx}>{tweet.name}</p>
        <p key={'content-'+ idx}>{tweet.content}</p>
      </div>
      )}

      </div>
      )}

      </div>


      {/* display user tweets */}


      {/* See All User Data (and Edit/Delete buttons) */}

    </div>
  )
}

export default Profile