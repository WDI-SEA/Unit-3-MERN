import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogOut.css'

class UserLogOut extends React.Component {

  handleLogout = () => {
    let navigate = useNavigate()
    navigate("/")
  }
  
  render() {
    return (
        <div className='UserLogOut'>
          <div>Name: {this.props.name}</div>
          <div>Email: {this.props.email}</div>
          <button onClick={this.handleLogout} className="btn-sm">Logout</button>
        </div>
    );
  }
}

export default UserLogOut;