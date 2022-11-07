import React from 'react'
import './Pokemon.css'

function Pokemon(props) {
  return (
    <div className='Pokemon'>
        <p> {props.name}</p>
        <p>Hp {props.hp}</p>
        <img src={props.img} />
        <br />
        <button onClick={props.Attack}>Attack</button>
    </div>
  )
}

export default Pokemon