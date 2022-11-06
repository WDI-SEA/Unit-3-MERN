import React from 'react'

function Skills(props) {
  return (
    <>
    <div>Skills</div>
    <ul>
      {props.skills.map(ele=><li>{ele}</li>)}
    </ul>
    </>
  )
}

export default Skills