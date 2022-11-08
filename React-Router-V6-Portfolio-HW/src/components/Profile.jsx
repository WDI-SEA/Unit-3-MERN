import React from 'react'

function Profile(props) {
  return (
    <div>
        <h1>Profile</h1>
        <h3> Hi, {props.AProfile[0]} 💗 </h3>
        <h3>Your are  {props.AProfile[1]}</h3>
     

    </div>
  )
}

export default Profile