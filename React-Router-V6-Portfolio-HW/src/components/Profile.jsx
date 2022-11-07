import React from 'react'

function Profile(props) {
  return (
    <>
    <div>Profile</div>
    <ul>
      <li>Username:{props.info.username}</li>
      <li>Password:{props.info.password}</li>
    </ul>
    </>
  )
}

export default Profile