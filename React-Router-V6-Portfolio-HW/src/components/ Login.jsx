import React from 'react'

function  Login() {
  return (
    <div> 
        <h1>Login</h1>

        <form class="form-signup" action="#" method="POST">
    
         <label for="email">Email:</label>
         <input id="input" type="email"  className='email' />
    
         <label for="password">Password:</label>
         <input id="input" type="password"  className='password'/>
   

         <button id="input" class="submit-btn" type="submit">Login</button>
        </form>
    </div>
  )
}

export default  Login