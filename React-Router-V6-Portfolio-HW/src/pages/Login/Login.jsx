import React from 'react'
import './Login.css'

function Login(props) {
  
  return (
    <div>
        <h1>Login Page</h1>
      
      <form>

      <label>
        <span>Username:</span>
          <input type='text' name='username' value={props.user.username}/>
      </label>
      <br/>
      

      <label>
        <span>Password:</span>
          <input type='password' name='password' value={props.user.password}/>
      </label>
      <br/>

        <button type='submit'>Sign Up</button>

      </form>

    </div>
  )
}

export default Login