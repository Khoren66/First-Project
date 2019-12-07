import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import API from '../api/index'
const SignUp = ({changeTab}) => {
    const [inputs, setInputs] = useState({});
const signUpFunc=()=>{
    console.log(inputs)
    API.peoples.signFetch(inputs)
    changeTab("LOGIN")

}

    const handleInputChange = (event) => {
        const { target: { name, value } } = event;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    return (
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
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleInputChange} name="firstname" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control onChange={handleInputChange} name="lastname" type="text" placeholder="Lastname" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleInputChange} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleInputChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={signUpFunc} variant="primary" className="btn-dark" type="submit">
                    Submit
  </Button>
            </Form>
            <div style={{ backgroundColor: "#343a40", position: "absolute", bottom: 0, width: "-webkit-fill-available", height: "7vh" }}><p style={{ color: "white", bottom: "0" }}>Created By Khoren Ter-Hovhannisyan 2019</p></div>
        </div>
    )
}

export default SignUp;