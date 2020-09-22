import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './Login.css';
import image from '../../resources/logo2.png';

const Login = () => {
    return (
        <Container className="login-container">
            <Card className="login">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">User Information</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button className="btn-block" variant="primary" type="submit">
                                Sign In
                            </Button>
                            <Form.Group controlId="formBasicCheckbox">
                                <p className="d-flex justify-content-center align-items-center">OR</p>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button className="btn-block" variant="primary">Sign Up </Button>
                </Card.Body>
            
            </Card>
        </Container>
    );
};

export default Login;