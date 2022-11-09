import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

function Profile() {

  // - Profile page:
  //       - display user data
  //       - see all user tweets

  const params = useParams()
  const [user, setUser] = useState([])
  const [userTweetsList, setUserTweetsList] = useState([])

  // console.log(params.userId)

  useEffect(() => {
    axios.get(`http://localhost:4000/tweets/${params.userId}`)
    .then(res => setUserTweetsList(res.data))
    .catch(err => console.log(err))

    // getUserTweets()
  }, [])

  // const getUserTweets = () => {
  //   axios.get(`http://localhost:4000/tweets/${params.userId}`)
  //   .then(res => setUserTweetsList(res.data))
  //   .catch(err => console.log(err))
  // }

  // // handling the form
  // const [formData, setFormData] = useState({
  //   content: '',
  //   name: ''
  // })

  // const handleChange = (e) => {
  //   // store user input in state
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = (e) => {
  //   // axios.post(create a tweet)
  //   axios.post('http://localhost:4000/tweets', formData)
  //   .then(res => console.log(res))
  //   .then(() => getAllTweets())
  //   .catch(err => console.log(err))
  // }

return (

<div>
  <h1>Profile</h1>
  {/* form with 1 input that is content */}
    {/* <form onSubmit={handleSubmit}>
      <label>What's happening</label><br/>
      <input name='name' value={formData.name} onChange={handleChange} placeholder='Name'></input><br/><br/>
      <textarea rows='4' cols='40' placeholder="Type something here" name='content' value={formData.content} onChange={handleChange}></textarea><br/>
      <button type='submit'>Tweet!</button>
    </form> */}

  {/* tweets[].map .. .. */}
  {/* display data in our HTML using tweets.map ... */}
  {userTweetsList.length ? userTweetsList.map(tweet =>
  <div key={tweet._id}>
    <p>Name: {tweet.name}</p>
    <p>Tweet: {tweet.content}</p>
  </div>
  )
:null}
    </div>
  )
}

export default Profile