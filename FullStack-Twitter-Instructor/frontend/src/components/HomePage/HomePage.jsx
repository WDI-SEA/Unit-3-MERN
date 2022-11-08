import React, { useEffect, useState } from 'react'
import axios from 'axios'
// - Home Page:
// - Form to create tweet -> onChange, onSubmit, store form data in state, API call

function HomePage() {
  //GOAL - display all tweets below
  
  const [tweetsList, setTweetsList] = useState([])
  
  useEffect(() => {
    // STEP 1: API call to our backend (
        // useEffect
          // -> Hook, run immediately when the component renders
        // axios.get(.. ..localhost:4000/tweets) -> returns parsed json data
      axios.get('http://localhost:4000/tweets')
      // STEP 2: Take the tweet list data and store it in our state
          // Take response -> setState(response)
      .then(res => setTweetsList(res.data))
      .catch(err => console.log(err))
        }, [])
        
        // STEP 3: Display data in HTML using tweets.map .. .. 
  return (
    <div>
      HomePage
    {/* Form - 1 Input -> content */}

    {/* tweets[].map( .. .. .) */}
    {tweetsList.length ? tweetsList.map(tweet => 
      <div key={tweet._id}>
        <p>{tweet.name}</p>
        <p>{tweet.content}</p>
      </div>
    )
     : null}
    </div>
  )
}
export default HomePage