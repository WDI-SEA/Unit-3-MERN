import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        
        <h1>Login</h1>
        <form>
            <label>
                Username: <br />
            </label>
            <input type='text'>
            </input>
            <br /> <br />
            <label>
                Password:
            </label>
            <br />
            <input type='text'></input>

            <br /> <br />
            <button>Login</button>


        </form>


      </div>
    )
  }
}