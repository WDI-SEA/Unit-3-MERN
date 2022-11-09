import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'


export default function Signin(props) {
  const [newUser, setNewUser] = useState({})

  const changeHandler = (e) =>{
    const user = {...newUser}
    user[e.target.name]= e.target.value
    console.log(user)
    setNewUser(user)
  }

  const loginHandler = () =>{
    props.login(newUser)

  }

  return (

    <div>

       <h1>Signup</h1>
       <Container>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" onChange={changeHandler}></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
        </Form.Group>

        <br />
        <Button variant="primary" onClick={loginHandler}>Login</Button>

       </Container>
       </div>
  )
}

