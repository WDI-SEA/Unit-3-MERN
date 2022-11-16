import React from 'react'
import './Skills.css'

function Skills(props) {

  const skills = props.skills.map((skill, idx) => <div className='skills'>{skill}</div>)

  return (
    <div>
      <h1>Skills</h1>

        {skills}

    </div>
  )
}

export default Skills