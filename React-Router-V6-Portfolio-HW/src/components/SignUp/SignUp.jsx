import React from "react";

function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>

      <div className="form-div">
        <form action="#">
          <label htmlFor="text">Username:</label>
          <input type="text" />

          <label htmlFor="email">Email:</label>
          <input type="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" />
          <br />
          <button>SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
