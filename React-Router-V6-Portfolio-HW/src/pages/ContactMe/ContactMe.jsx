import React from 'react'
import './ContactMe.css'

function ContactMe(props) {

  const email1 = <><h2>Email 1: </h2><span>{props.contact.email1}</span></>
  const email2 = <><h2>Email 2: </h2><span>{props.contact.email2}</span></>
  const phone = <><h2>Phone: </h2><span>{props.contact.phone}</span></>

  return (
    <div>
      <h1>Contact Page</h1>
        {email1}
        {email2}
        {phone}
    </div>
  )
}

export default ContactMe