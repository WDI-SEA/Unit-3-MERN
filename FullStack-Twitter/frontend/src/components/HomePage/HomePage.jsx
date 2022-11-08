import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './HomePage.css'
// - Home Page:

function HomePage() {
  //GOAL - display all tweets below
  const [tweetsList, setTweetsList] = useState([])
  useEffect(() => {
    // STEP 1: API call to our backend (
      // useEffect
      // -> Hook, run immediately when the component renders
      // axios.get(.. ..localhost:4000/tweets) -> returns parsed json data
      // STEP 2: Take the tweet list data and store it in our state
      // Take response -> setState(response)
        getAllTweets()
    }, [])

    const getAllTweets = () => {
      axios.get('http://localhost:4000/tweets')
      .then(res => setTweetsList(res.data))
      .catch(err => console.log(err))
    }
    

   
   
   
   

    
    
    
    const [formData, setFormData] = useState({
      name: '',
      content: ''
      }
    )
    const handleChange = (e) => {
      //Store the user input into state
      setFormData({
        ...formData,
        //name: from the form name!, it goes though them all 
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = (e) => {
      // axios.post(Create a tweet)
      axios.post('http://localhost:4000/tweets', formData)
      .then(res => console.log(res))
      .then(() => getAllTweets())
      .catch(err => console.log(err))
    }

      // - Form to create tweet -> onChange, onSubmit, store form data in state, API call
    return (
      <div>
    {/* Form - 1 Input -> content */}
    <div className='addT'>

    <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br></br><br />
        <textarea 
        rows="4" 
        cols="45" 
        placeholder="What's Happening?"
        name="content"
        value={formData.content}
        onChange={handleChange}
        />
        <br />
        <button type="submit">Tweet!</button>
      </form>
    </div>



      {/* STEP 3: Display data in HTML using tweets.map .. ..  */}
    {/* tweets[].map( .. .. .) */}
    {tweetsList.length ? tweetsList.map(tweet => 
      <div key={tweet._id} className="tweets">
        <p>Name: {tweet.name}</p>
        <p>Tweet: {tweet.content}</p>
      </div>
    )
    : null}
    </div>
  )
}
export default HomePage