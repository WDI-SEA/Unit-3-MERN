import React from 'react'

function Profile(props) {
  return (
    <div>
        <h1>Profile</h1>
        <h4 key='name'>Name: {props.info.name}</h4>
        <h4 key='title'>Title: {props.info.title}</h4>
        <h4 key='email'>Email: {props.info.email}</h4>
    </div>
  )
}

export default Profile