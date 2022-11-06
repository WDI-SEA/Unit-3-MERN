import React from 'react'

function SignUp() {
  return (
    <div>
        <h1>SignUp</h1>
        <form class="form-signup" action="#" method="POST">
         <label for="name"> UserName:</label>
          <input id="input" type="text" className='name' />
    
         <label for="email">Email:</label>
         <input id="input" type="email"  className='email' />

         <label for="password">Password:</label>
         <input id="input" type="password"  className='password'/>

         <button id="input" class="submit-btn" type="submit">Sign Up</button>
       </form>

      
                
    </div>
  )
}

export default SignUp