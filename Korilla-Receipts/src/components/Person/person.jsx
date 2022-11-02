import React from "react"
import './person.css'

function Person(props) {

    console.log('This is the persons props! ', props)

    return (
      <div>
       <h3> {props.person}</h3>
          <div>
          {props.order.main},
          {props.order.protien},
          {props.order.rice},
          {props.order.sauce},
          {props.order.drink},
          {props.order.cost}
          </div>
      </div>
);
}
export default Person;