import React, { useState } from 'react';
import API from '../api/index';
import { Form, Button } from 'react-bootstrap'


const Login = ({ changeTab }) => {
  const [inputs, setInputs] = useState({});
 

  const onHandleLogin= () => {
    console.log(inputs)
    API.peoples.loginFetch(inputs)
    setTimeout(()=>changeTab("WORKSPACE"),1000)
  }


  const handleInputChange = (event) => {
  const { target: { name, value } } = event;
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs)
  }

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Form style={{
          marginTop: "50px",
          padding: "10px",
          border: "solid 1px",
          borderRadius: "10px"
        }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={handleInputChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never controlshare your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={handleInputChange} type="password" placeholder="Password" />
          </Form.Group>
          <div className="Formbuttons" style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Button onClick={onHandleLogin}  className="btn-dark" variant="primary" type="button">
              Submit</Button>
            <Button onClick={() => changeTab("SIGNUP")} className="btn-dark" variant="primary" type="button">
              Sign Up  </Button>
          </div>
        </Form>
      </div>
      <div style={{ backgroundColor: "#343a40", position: "absolute", bottom: 0, width: "-webkit-fill-available", height: "7vh" }}><p style={{ color: "white", bottom: "0" }}>Created By Khoren Ter-Hovhannisyan 2019</p></div>
    </div>
  )
}
export default Login;