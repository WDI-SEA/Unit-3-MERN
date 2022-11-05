import React from 'react'

function FavoriteFood(props) {

    const food = props.foodList.map((food, idx) => 
        <li key={idx}>{food}</li>
    )

  return (
    <div>
        <h1>
            Favorite Food Page
        </h1>
        <div style={{width:'200px', margin: '0 auto'}}>
            <ul>
                {food}
            </ul>
        </div>
    </div>
  )
}

export default FavoriteFood