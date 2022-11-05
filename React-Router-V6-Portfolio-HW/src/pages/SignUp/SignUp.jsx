import React from 'react'
import './SignUp.css'

function SignUp(props) {
  return (
    <div>
      <h1>Sign Up Page</h1>
      
      <form>

      <label>
        <span>First Name:</span>
          <input type='text' name='firstName' value={props.user.firstName}/>
      </label>
      <br/>

      <label>
        <span>Last Name:</span>
          <input type='text' name='lastName' value={props.user.lastName}/>
      </label>
      <br/>

      <label>
        <span>UserName:</span>
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

export default SignUp