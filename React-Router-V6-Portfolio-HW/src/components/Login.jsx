import React from 'react'

function Login(props) {
  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={props.addUser}>
        <label>
          <span>Name</span>
          <input value={props.newUser.name} name='name' onChange={handleChange} />
        </label>
        <label>
          <span>Password</span>
          <input value={props.newUser.password} onChange={handleChange} name='password'>
          </input>
        </label>

        <button type='submit' onClick={props.addUser}>
          Login
        </button>
        </form>
    </div>
  )
}

export default Login