import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const [accepted, setAccepted] = useState(false);


        const handleRegister =event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;

            console.log(name, photo, email, password)

            createUser(email, password)
            .then(result =>{
                const createdUser = result.user;
                console.log(createdUser);
            })

            .catch(error =>{
                console.log(error);
            })
        }


        const handleAccepted = event =>{
            setAccepted(event.target.checked)
        }

    return (
        <Container className='w-25 mt-3 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}> 
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
                <Form.Check

                onClick={handleAccepted}
                 type="checkbox"
                 name="accept"
                  label={<>Accept<Link to='/terms'>Terms and condition</Link></>}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
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