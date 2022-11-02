import React from 'react';
import './UserLogOut.css'

class UserLogOut extends React.Component {
  render() {
  return (
      <div className='UserLogOut'>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <button className="btn-sm">Logout</button>
      </div>
  );
  }
}

export default UserLogOut;