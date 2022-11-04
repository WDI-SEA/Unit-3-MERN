import React from "react";

function Skills(props) {
  return (
    <div>
      <h1>Skills</h1>
      <h2 className="m">My Hard Skills:</h2>
      <ul>
        {props.hSkills.map((hs, index)=>(
            <li key={index}>{hs}</li>
        ))}
      </ul>

      <h2 className="m">My Soft Skills:</h2>
      <ul>
        {props.sSkills.map((ss, index)=>(
            <li key={index}>{ss}</li>
        ))}
      </ul>

    </div>
  );
}

export default Skills;
