import React from 'react'

function SignUp(props) {
  return (
    <div>
        <h1>Sign Up</h1>

        <form onSubmit={props.addUser}>
        <label>
          <span>Name</span>
          <input value={props.newUser.name} name='name' onChange={props.handleChange} />
        </label>
        <label>
          <span>Password</span>
          <input value={props.newUser.password} onChange={props.handleChange} name='password'>
          </input>
        </label>

        <button type='submit' onClick={props.addUser}>
          Sign Up
        </button>
        </form>
    </div>
  )
}

export default SignUp