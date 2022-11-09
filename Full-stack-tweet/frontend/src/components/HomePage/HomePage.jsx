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
    
    // STEP 3: Display data in HTML using tweets.map .. .. 
   
   
   
   
    // - Form to create tweet -> onChange, onSubmit, store form data in state, API call
    const [formData, setFormData] = useState({
      name: '',
      content: ''
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
      axios.post('http://localhost:4000/tweets', formData, 
      {
        headers:{
          "Authorization":"Bearer "+ localStorage.getItem("token")
        }
      })
      .then(res => console.log(res))
      .then(() => getAllTweets())
      .catch(err => console.log(err))
    }
    return (
      <div>
     
    {/* Form - 1 Input -> content */}
      <form onSubmit={handleSubmit} className='homeform'>
       <br />
        {/* <label>Whats happening?</label><br></br> */}
        <input  className='input' name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br /><br />
        <textarea className='input'
        rows="4" 
        cols="45" 
        placeholder="What's Happening?"
        name="content"
        value={formData.content}
        onChange={handleChange}
        />
        <br /> <br />
        <button className='submit' type="submit">Tweet!</button>
        <br />
      </form>




    {/* tweets[].map( .. .. .) */}
    {tweetsList.length ? tweetsList.map(tweet =>    
     <div key={tweet._id} className='tweet'>
      <br />
      <p className='name'> Name:  {tweet.name}  </p>
      <p>Tweet:  {tweet.content}</p>
      <br />
     </div>
     ): null}
    </div>
  )
}
export default HomePage