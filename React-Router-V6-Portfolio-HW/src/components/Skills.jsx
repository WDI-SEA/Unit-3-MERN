import React from 'react'

function Skills(props) {
    const skills = props.skills.map((skill, idx)=>{
        return <li key={idx}>{skill}</li>
    })

  return (
    <div>
        <h1>Skills</h1>
        <ul>
            {skills}
        </ul>
    </div>
  )
}

export default Skills