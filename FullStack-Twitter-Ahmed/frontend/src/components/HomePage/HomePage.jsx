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

    const [tweetsList, setTweetList] = useState([])




    useEffect(()=> {
    // STEP 1: API Call to our backend 
      // useEffect()
      // -> It is a Hook, runs immediately when the component renders


      // axios(...localhost:/tweets)
      // parsed json data
      axios.get('http://localhost:4000/tweets')
      .then(res => setTweetList(res.data))
      .catch(err => console.log(err))


    }, [])

  return (
    <div>
      {/* Form - 1 Input -> Content */}

      {/* tweets[].map(....) */}


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