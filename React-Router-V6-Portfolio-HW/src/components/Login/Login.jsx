import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <div className="form-div">
        <form action="#">
          <label htmlFor="email">Email:</label>
          <input type="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" />

          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
