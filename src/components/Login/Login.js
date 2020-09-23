import React from 'react';
import useAuth from './UseAuth';
import { Link } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import image from '../../resources/logo2.png';

const Login = () => {
    const [currentUser , setCurrentUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data => { 
        if(currentUser){
            if(data.email && data.password){
                auth.signInUser(data.email, data.password);
            }
        }
        else{
            if(data.name && data.email && data.password && data.confirm_password){
                auth.createUser(data.email, data.confirm_password, data.name)
            }
        }
        
    }
    return (
        <Container className="login-container">
            <Card className="login">
                <Card.Img variant="top" src={image} />
                {
                currentUser ? 
                <Form onSubmit={handleSubmit(onSubmit)} className="py-5">
                    {
                    auth.user != null && <p className="error text-danger">{auth.user.error}</p>
                    }
                    <Form.Group>
                        <Form.Control name="email" className="form-control" ref={register({ required: true })} placeholder="Email"/>
                        {errors.email && <span className="error">Email is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">Password is required</span>}
                    </Form.Group>
                    
                    <Form.Group>
                        <Button className="btn btn-danger btn-block" type="submit">Sign In</Button>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Form.Label className="text-danger" onClick={() => setCurrentUser(false)}>Create a new Account</Form.Label>
                    </Form.Group>
                </Form>
                :
                <Form onSubmit={handleSubmit(onSubmit)} className="py-5">
                    {
                    auth.user != null && <p className="text-danger">{auth.user.error}</p>
                    }
                    <Form.Group>
                        <Form.Control name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="email" className="form-control" ref={register({ required: true })} placeholder="Email"/>
                        {errors.email && <span className="error">Email is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">Password is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="confirm_password" className="form-control" ref={register({
                        validate: (value) => value === watch('password')
                        })} placeholder="Confirm Password" />
                        {errors.confirm_password && <span className="error">Passwords don't match.</span>}
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn btn-danger btn-block"  type="submit">Sign Up</Button>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Form.Label className="text-danger" onClick={() => setCurrentUser(true)}>Already Have an Account</Form.Label>
                    </Form.Group>
                </Form>
                }
            </Card>
        </Container>
    );
};

export default Login;