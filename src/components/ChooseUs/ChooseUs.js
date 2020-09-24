import React from 'react';
import './ChooseUs.css';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import fastDelivery from '../../resources/Image/img1.png';
import notification from '../../resources/Image/img2.png';
import homeDelivery from '../../resources/Image/img3.png';
import bus from '../../resources/ICON/icon1.png';
import bell from '../../resources/ICON/icon2.png';
import car from '../../resources/ICON/icon3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero saepe! Architecto nihil numquam aut. Nobis non dicta obcaecati culpa pariatur. Non eaque optio ab inventore pariatur sequi. Veritatis, nobis!</p>
                </Col>
            </Row>
            <Row>
                <CardDeck className="py-4">
                    <Card >
                        <Card.Img className="card-img" variant="top" src={fastDelivery} />
                        <Card.Body>
                            <Card.Title> <img src={bus} alt=""/> Fast Delivery</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div id="headingOne">
                                    <h6 className="mt-2">
                                        <Link class="card-head" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        See More  <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </h6>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    </div>
                                    <h6 className="mt-2 text-right">
                                        <Link class="card-head" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <FontAwesomeIcon icon={faArrowLeft} /> See Less 
                                        </Link>
                                    </h6>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={notification} />
                        <Card.Body>
                            <Card.Title> <img src={bell} alt=""/> A Good Auto Responder</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div id="headingTwo">
                                    <h6 className="mt-2">
                                        <Link class="card-head" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        See More  <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </h6>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        
                                    </div>
                                    <h6 className="mt-2 text-right">
                                        <Link class="card-head" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <FontAwesomeIcon icon={faArrowLeft} /> See Less 
                                        </Link>
                                    </h6>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={homeDelivery} />
                        <Card.Body>
                            <Card.Title> <img src={car} alt=""/> Home Delivery</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div id="headingThree">
                                    <h6 className="mt-2">
                                        <Link class="card-head" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        See More  <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </h6>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        <h6 className="mt-2 text-right">
                                            <Link class="card-head" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <FontAwesomeIcon icon={faArrowLeft} /> See Less 
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default ChooseUs;