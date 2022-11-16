import React, { useEffect, useState } from 'react'
import './HomePage.css'
import axios from 'axios'



  /*
  Home Page:
    Form to create a new tweet -> onChange, onSubmit, store form in state, API Call
    display all tweets below
  */


function HomePage() {

  //GOAL: Display all the tweets below



    // STEP 2: Take the tweet list data and store it in our state
      // Take response -> setState(response)

    // STEP 3: Display data in HTML using tweets.map .. ...

    const [tweetsList, setTweetsList] = useState([])




    useEffect(()=> {
    // STEP 1: API Call to our backend 
      // useEffect()
      // -> It is a Hook, runs immediately when the component renders


      // axios(...localhost:/tweets)
      // parsed json data
      axios.get('http://localhost:4000/tweets')
      .then(res => setTweetsList(res.data))
      .catch(err => console.log(err))


    }, [])


    const getAllTweets = () => {
      axios.get('http://localhost:4000/tweets')
      .then(res => setTweetsList(res.data))
      .catch(err => console.log(err))
    }


    const [formData, setFormData] = useState({
      name: '',
      content: ''
    })

    const handleChange = (e) => {
      // store the user input into state
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      // axios.post(Create a tweet)
      axios.post('http://localhost:4000/tweets', formData, {

      // pass Authorization in headers with the form to get token
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => console.log(res))
      .then(() => getAllTweets())
      .catch(err => console.log(err))
    }

  return (
    <div>
      
      {/* Form - 1 Input -> content */}

  <form onSubmit={handleSubmit}>

    <label>Whats Happening</label>
    <br/><br/>
    <input name="name" value={formData.name} onChange={handleChange}></input>
    <br />
    <textarea
      rows="4"
      cols="45"
      placeholder="What's Happening"
      name="content"
      value={formData.content}
      onChange={handleChange}
      >
    </textarea>

    <br />
    <button type='submit'>Tweet!</button>
  </form>







  {/* tweets[].map( .. .. .) */}
    { tweetsList.length ? tweetsList.map(tweet => 
    
    <div style={{border: '1px solid darkblue', backgroundColor: 'lightblue', margin: '10px', borderRadius: '20px'}}>
      
    <p><span style={{fontWeight: 'bold'}}>Name: </span>{tweet.name}</p>
    <p><span style={{fontWeight: 'bold'}}>Content: </span>{tweet.content}</p>
    </div>
    
    // If there is no data Don't use this
    ): null}

    </div>
  )
}

export default HomePage