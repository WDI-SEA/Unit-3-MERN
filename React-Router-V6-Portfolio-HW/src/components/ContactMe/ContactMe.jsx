import React from "react";

function ContactMe(props) {
  return (
    <div>
      <h1>ContactMe</h1>
      <h2 className="m">Reach out to me at:</h2>
      <p className="g"> GitHub: {props.contact[0]}</p>
      <p className="g"> LinkdIn: {props.contact[1]}</p>
      <p className="g"> Phone Number: {props.contact[2]}</p>
      <h2></h2>

    </div>
  );
}

export default ContactMe;
