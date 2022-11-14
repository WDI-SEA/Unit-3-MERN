import React from 'react'

function Contact(props) {
  return (
    <div>
        <h1>Contact Me</h1>
        <h4 key='phone'>Phone: {props.contacts.phone}</h4>
        <h4 key='email'>Email: {props.contacts.email}</h4>
        <h4 key='po'>PO.BOX: {props.contacts.po}</h4>
    </div>
  )
}

export default Contact