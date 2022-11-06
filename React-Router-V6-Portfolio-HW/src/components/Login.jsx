import React from 'react'

function Login() {
  return (
    <>
    <div>Login</div>
    <form id="login">
      <input type="email" id="email"/>
      <input type="password" id="password"/>
      <input type="submit" value="Login"/>
    </form>
    </>
  )
}

export default Login