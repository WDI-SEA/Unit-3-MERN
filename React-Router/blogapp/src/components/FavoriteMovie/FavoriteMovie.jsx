import React from 'react'

function FavoriteMovie(props) {

    const movies = props.moviesList.map((movie, idx) => 
    <li key={idx}>{movie}</li>
)

  return (
    <div>
        <h1>
            Favorite Movie Page
        </h1>
        
        <div style={{width:'200px', margin: '0 auto'}}>
            <ul>
            { movies}   
            </ul>
        </div>
    </div>
  )
}

export default FavoriteMovie