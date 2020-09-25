import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import delivery1 from '../../resources//Image/delivery1.png';
import delivery2 from '../../resources/Image/delivery2.png';
import './FoodDelivery.css';
import { useAuthentication } from '../Login/UseAuth';
import MapContainer from '../MapContainer/MapContainer';


const FoodDelivery = () => {
    const auth = useAuthentication();
    const time = new Date().toLocaleString();
    return (
        <Container className="py-5">
            <Row>
                <Col className="map" md={7}>
                    <MapContainer></MapContainer>
                </Col>
                <Col md={4} className="delivery-place ml-md-5 my-sm-3 my-xs-3">
                    <div>
                        <img className="delivery-img  my-md-3 ml-md-4" src={delivery1} alt=""/>
                        <div className="delivery-address p-2">
                            <h6>Your Location</h6>
                            <p className="text-muted">Post Office Goli, Chawkbazar</p>
                            <h6>Shop Address</h6>
                            <p className="text-muted">Golzar Tower</p>
                        </div>
                        <div>
                            <p className="mt-md-3"> <b>Delivery Time</b>: {time}</p>
                        </div>
                        <div className="d-flex align-items-center oder-person p-2 my-md-2">
                            <img className="delivery-image" src={delivery2} alt=""/>
                            {
                                auth.user ? 
                                <h6>{auth.user.displayName}</h6>
                                :
                                <p>Can't find any user</p>
                            }
                        </div>
                        <Button className="btn-danger btn-block my-md-4">Contact</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodDelivery;