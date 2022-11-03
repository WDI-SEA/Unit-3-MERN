import React from 'react'
import './Pokemon.css'

function Pokemon(props) {

  return (
    <div className='container'>
       
       
        <h2>Name: {props.name} </h2>
        <h2>HP: {props.hp} </h2>
        <img src={props.img} alt={props.name}/>
        <button onClick={props.attack}>Attack!</button>
        
       
    </div>
  )
}

export default Pokemon