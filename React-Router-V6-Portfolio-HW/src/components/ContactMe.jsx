import React from 'react'

function ContactMe(props) {
  return (
    <>
    <div>ContactMe</div>
    <p>{props.contacts.email}</p>
    <p>{props.contacts.telNo}</p>
  </>
  )
}

export default ContactMe