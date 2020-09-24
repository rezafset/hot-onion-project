import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import checkout from '../../resources/Image/checkout.png';
import delivery1 from '../../resources//Image/delivery1.png';
import delivery2 from '../../resources/Image/delivery2.png';
import './FoodDelivery.css';
import { useAuthentication } from '../Login/UseAuth';


const FoodDelivery = () => {
    const auth = useAuthentication();
    return (
        <Container className="py-5">
            <Row>
                <Col md={7}>
                        <img src={checkout} alt=""/>
                </Col>
                <Col md={5} className="delivery-place">
                    <div>
                        <img className="delivery-img" src={delivery1} alt=""/>
                        <div className="delivery-address p-2">
                            <h6>Your Location</h6>
                            <p>Post Office Goli, Chawkbazar</p>
                            <h6>Shop Address</h6>
                            <p>Golzar Tower</p>
                        </div>
                        <div>
                            
                        </div>
                        <div className="d-flex align-items-center oder-person p-2 mt-md-2">
                            <img className="delivery-image" src={delivery2} alt=""/>
                            {
                                auth.user ? 
                                <h6>{auth.user.displayName}</h6>
                                :
                                <p>Can't find any user</p>
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodDelivery;