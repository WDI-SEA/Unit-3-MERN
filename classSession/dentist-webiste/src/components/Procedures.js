import React, { Component } from 'react'

export default class Procedures extends Component {
  render() {
    const proceduresEls = this.props.Procedures.map((el, index) => (
        <li key={index}>{el}</li>
    ))

    
    return (
        <div>
        <h1>Procedures</h1>
        <p>Here at Dentist Office we provide a wide variety of procedures. We accept all sorts of insurance and have competitive uninsured payment plans. Find the service you need and visit our contact page to find out how to reach out to us to make the appointment you need!</p>
        <ul>
        {proceduresEls}
        </ul>
        </div>
    )
  }
}
