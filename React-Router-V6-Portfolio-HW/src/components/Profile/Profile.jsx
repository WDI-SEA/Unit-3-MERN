import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>

      <div className="profile">
      <p className="g">Hi, my name is</p>
      <h2 className="n"> {props.info[0]}</h2>
      <h2 className="m">I build things for the web</h2>
      <p>A full stack web develober with a bachelor degree in <span className="g">{props.info[1]}</span></p>
      </div>
    </div>
  );
}

export default Profile;
