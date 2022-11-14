import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {

      // API call to our backend (axios.get(...localhost:4000/tweets))
      // useEffect
      // hook -> run immedietly when the component renders
    
      const [tweetsList, setTweetsList] = useState([])

      useEffect(() => {
        // the route will be modified if we need a specific user's tweets ../tweets/${id}

        // take the tweet list data & store it in a state setState(response)
        axios.get('http://localhost:4000/tweets')
        .then(res => setTweetsList(res.data))
        .catch(err => console.log(err))

        getAllTweets()
      }, [])

      const getAllTweets = () => {
        axios.get('http://localhost:4000/tweets')
        .then(res => setTweetsList(res.data))
        .catch(err => console.log(err))
      }

      // handling the form
      const [formData, setFormData] = useState({
        content: '',
        name: ''
      })

      const handleChange = (e) => {
        // store user input in state
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = (e) => {
        // axios.post(create a tweet)
        axios.post('http://localhost:4000/tweets', formData)
        .then(res => console.log(res))
        .then(() => getAllTweets())
        .catch(err => console.log(err))
      }

  return (

    <div>
      <h1>Home</h1>
      {/* form with 1 input that is content */}
        <form onSubmit={handleSubmit}>
          <label>What's happening</label><br/>
          <input name='name' value={formData.name} onChange={handleChange} placeholder='Name'></input><br/><br/>
          <textarea rows='4' cols='40' placeholder="Type something here" name='content' value={formData.content} onChange={handleChange}></textarea><br/>
          <button type='submit'>Tweet!</button>
        </form>

      {/* tweets[].map .. .. */}
      {/* display data in our HTML using tweets.map ... */}
      {tweetsList.length ? tweetsList.map(tweet =>
      <div key={tweet._id}>
        <Link to={`/profile/${tweet._id}`}>{tweet.name}</Link>
        <p>Name: {tweet.name}</p>
        <p>Tweet: {tweet.content}</p>
      </div>
      )
    :null}
    </div>
  )
}

export default Home