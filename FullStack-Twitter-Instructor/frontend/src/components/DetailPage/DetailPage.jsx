import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailPage() {

const [tweet, setTweet] = useState({})

const params = useParams()    

console.log(params)

useEffect(() => {
    axios.get(`http://localhost:4000/tweets/${params.tweetId}`)
    .then(res => setTweet(res.data))
}, [])


  return (
    <div>
        {tweet ? 
        <div>
            <p>{tweet.name}</p>
            <p>{tweet.content}</p>
        </div>    
    : null} 
    </div>
  )
}

export default DetailPage