import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <Container className='w-25 mt-3 mx-auto'>
        <h3>Please Register</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' required placeholder="write your name " />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' required placeholder="Your photo" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' required placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' required placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="accept" label="Accept terms and conditon" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button><br></br>

            <Form.Text className="text-secondary">
                   Allready have an account? <Link to= '/login'>Login</Link>
                </Form.Text>
            <Form.Text className="text-success">
                   
                </Form.Text>
            <Form.Text className="text-danger">
                   
                </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;