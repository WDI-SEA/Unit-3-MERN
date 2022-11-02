import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Birds() {

    const [birds, setBirds] = useState([])

    useEffect(() => {
        fetch('https://audubon-api.herokuapp.com/api/birds')
        .then(res => res.json())
        .then((res) => {
            console.log('Birds API Response: ', res)
            setBirds(res)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div><section className="container">
        {birds.map((bird, idx) => {
            return (
                <Link to={`/details/${bird.id}`} key={bird.id} >
                <div className="card">
                <div className="card-image">
                    <img
                    src={bird.image}
                    alt={bird.name}
                    />
                </div>
                <div className="card-title">
                    <h3>{bird.name}</h3>
                </div>
                </div>
                </Link>
            )
        })}

  </section>
  </div>
  )
}

export default Birds