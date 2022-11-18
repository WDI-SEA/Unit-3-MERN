import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        
        <h1>Sign-up</h1>

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
            <button>Sign up</button>


        </form>
      </div>
    )
  }
}