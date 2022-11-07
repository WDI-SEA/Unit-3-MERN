import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        
        <h1>Contact me</h1>

        <form>
            <label>
                Name: <br />
            </label>
            <input type='text'>
            </input>
            <br /> <br />
            <label>
                Email:
            </label>
            <br />
            <input type='text'></input>
            <br /> <br />

        
            <label>
                Comment:
            </label>
            <br />
            <input type='text'></input>
            <br /> <br />
            <button>Submit</button>


        </form>

      </div>
    )
  }
}