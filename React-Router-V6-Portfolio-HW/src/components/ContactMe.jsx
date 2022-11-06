import React from 'react'

function ContactMe(props) {
  return (
    <div>
        <h1>Contact Me</h1>
        <p> Call or email from 9AM until 9PM. If I missed your call leave a message then I'll get back to you.</p>
        <h4>Number:  {props.AContactMe[0]}</h4>
        <h4>Email:  {props.AContactMe[1]}</h4>
        <h4>Github:  {props.AContactMe[2]}</h4>
        <h4>Linkedin:  {props.AContactMe[3]}</h4>

    </div>
  )
}

export default ContactMe