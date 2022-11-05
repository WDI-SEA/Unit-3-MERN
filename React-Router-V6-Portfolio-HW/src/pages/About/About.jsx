import React from 'react'
import './About.css'

function About(props) {
  const about = <h3>{props.about}</h3>
  return (
    <div>
      <h1>About</h1>
      {about}
    </div>
  )
}

export default About