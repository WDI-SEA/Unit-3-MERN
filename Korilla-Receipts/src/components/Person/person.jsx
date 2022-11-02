import React from "react"
import './person.css'

function Person(props) {

    console.log('This is the persons props! ', props)

    return (
      <div>
       <h3> {props.Person}</h3>
        <div key={i}>
          <div>
          {s.date},
          {s.main},
          {s.protien},
          {s.rice},
          {s.sauce},
          {s.drink},
          {s.cost}
          </div>
      </div>
      </div>
);
}
export default App;