import React from 'react';
import './Footer.css'; 
import { Col, Container, Row } from 'react-bootstrap';
import footerImage from '../../resources/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-4 bg-dark text-light">
            <Container className="py-2 pt-5">
                <Row>
                    <Col md={7}>
                        <img className="footer-img" src={footerImage} alt=""/>
                    </Col>
                    <Col className="bg-dark" md={3}>
                        <ul class="list-group">
                            <Link className="text-light href">About Online Food</Link>
                            <Link className="text-light href">Read Our Blog</Link>
                            <Link className="text-light href">Sign Up to Deliver</Link>
                            <Link className="text-light href">Add your restautant</Link>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <ul class="list-group">
                            <Link className="text-light href">Get help</Link>
                            <Link className="text-light href">Read FAQs</Link>
                            <Link className="text-light href">View all cities</Link>
                            <Link className="text-light href">Restautant near me</Link>
                        </ul>
                    </Col>
                </Row>
                <p className="text-center mt-5 pt-5">Copyright &copy; 2020 Online Food | Developed by : <Link to="https://www.linkedin.com/in/ahmed-reza-shah-a96764158/" className="me">Reza Shah</Link> </p>
            </Container>
        </div>
    );
};

export default Footer;