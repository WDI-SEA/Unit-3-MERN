import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function BirdDetails() {

    const [bird, setBird] = useState(null)
    const { birdID } = useParams()
    useEffect(() => {
        fetch(`https://audubon-api.herokuapp.com/api/birds/${birdID}`)
        .then(res => res.json())
        .then(res => {
            console.log('This is the Bird Detail:', res)
            setBird(res)
        })
    }, [])


    return (
        <div className="details-container">
          {bird ?  (
              <>
          <img
            src={bird.image}
            alt="Acadian Flycatcher"
          />
          <div className="details">
            <h2>{bird.name}</h2>
            <h3>({bird.genus})</h3>
            <h4>Conservation Status</h4>
            <p>
             {bird.conservationStatus}
            </p>
            <a
              href={bird.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
            </>
            ) : null}
        </div>
      );
      
}

export default BirdDetails