import React from 'react'

function pokemon(props) {
  return (
    <div>
      <br/>{props.name} <br/>
      {props.hp} <br/>
     <img src= {props.img}/><br/>
    </div>
  )
}

export default pokemon