import React from 'react'

function About(props) {
  return (
    <div>
        <h1>About</h1>
        <div>
            <h4>{props.projects[0].title}</h4>
            <iframe className='live-game-horizontal' src={props.projects[0].url}></iframe>
        </div>
        <div>
            <h4>{props.projects[1].title}</h4>
            <iframe className='live-game-vertical' src={props.projects[1].url}></iframe>
        </div>
    </div>
  )
}

export default About