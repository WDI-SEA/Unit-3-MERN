import React from 'react'
import './Pokemon.css'

function Pokemon(props) {


  const handleAttack = props.func

  return (
    <div style={{display: 'inline-block', width: '49%', textAlign: 'center'}}>

      <h1>HP: {props.hp}</h1>
      <img src={props.image}></img>

      <br />
      <button onClick={handleAttack}>Attack</button>
    </div>
  )
}

export default Pokemon