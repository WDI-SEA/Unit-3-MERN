import React from "react";

function About(props) {
  return (
    <div>
      <h1>About</h1>
     <p className="about">{props.about}</p>
    </div>
  );
}

export default About;
