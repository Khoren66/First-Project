import React, { useState } from 'react';
import API from '../../api/index';
import Storage from '../../services/Storage'
import { Form, Button, Modal } from 'react-bootstrap'
import './login.css'

const Login = ({ changeTab }) => {
  const [inputs, setInputs] = useState({});
  const [showError, setShowError] = useState(false);


  const onHandleLogin = () => {
    console.log(inputs)
    API.peoples.loginFetch(inputs)
      .then(response => {
        if (response.ok) { return response.json() }
        else { throw new Error("Email or Password is incorrect") }
      })
      .then((data) => {
        Storage.set("token", data.id)
        Storage.set("userId", data.userId)
        changeTab("WORKSPACE")
      })
      .catch(function (err) {
        setShowError(true)
      })
  }


  const handleInputChange = (event) => {
    const { target: { name, value } } = event;
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs)
  }

  const handleClose = () => {
    setShowError(false)
    setInputs({
      email: "",
      password: ""
    })
  }


  return (
    <div>
      <div className='main'>
        <Form className='formMain'>
          <Form.Group controlId="formBasicEmail">
            <Modal  show={showError} onHide={handleClose} animation={false}>
              <Modal.Header className="modalStyle">
                <h3 >Email or password is incorrect !!!</h3>
                </Modal.Header>
              <Modal.Footer className="modalStyle">
                <Button className="btn-dark" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" value={inputs.email} onChange={handleInputChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never controlshare your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={inputs.password} onChange={handleInputChange} type="password" placeholder="Password" />
          </Form.Group>
          <div className="Formbuttons" style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Button onClick={() => changeTab("SIGNUP")} className="btn-dark" variant="primary" type="button">
              Sign Up  </Button>
            <Button  onClick={onHandleLogin} className="btn-dark" variant="primary" type="button">
              Submit</Button>   
          </div>
        </Form>
      </div>
      <div className='footer'><p className="pFooter">Created By Khoren Ter-Hovhannisyan 2019</p></div>
    </div>
  )
}
export default Login;