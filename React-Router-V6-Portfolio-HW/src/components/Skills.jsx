import React from 'react'

function Skills(props) {
  
    return (
     <div>
      <h1>Skills</h1>
      <h2>TECHNICAL SKILLS</h2>

      {props.TSkills.map((el, index)=>(
         <li key={index}>{el}</li>
        ))}

      <h2>SOFT SKILLS</h2>
      {props.SSkills.map((el, index)=>(
         <li key={index}>{el}</li>
        ))}
     
     
    
    </div>
  )
}



export default Skills

