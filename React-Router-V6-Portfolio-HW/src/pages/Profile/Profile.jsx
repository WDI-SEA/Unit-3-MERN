import React from 'react'
import './Profile.css'

function Profile(props) {
  const image = <img className='profileImg' src={props.profile.image}/>
  const profession = <h2>{props.profile.profession}</h2>
  const brandStatement = props.profile.brandState

  return (
    <div>
      <h1>Profile</h1>
      {image}
      {profession}
      <p className='brand'>{brandStatement}</p>
      
    </div>
  )
}

export default Profile