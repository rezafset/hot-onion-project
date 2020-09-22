import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './FoodDetails.css';
import { Link } from 'react-router-dom';

const FoodDetails = (props) => {
    const {image, name, foodDescription, price} = props.food;
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (sign) =>{
        const currentQuantity = quantity;
        let newQuantity;
        if(sign === '+'){
            newQuantity = currentQuantity + 1
        }
        else{
            newQuantity = currentQuantity >1 ? currentQuantity - 1: currentQuantity;
        }
        setQuantity(newQuantity);
    }
    return (
        <Container className="my-5 pt-5">
            <Row>
                <Col md={6}>
                    <h1 className="py-2">{name}</h1>
                    <p>{foodDescription}</p>
                    <div className="d-flex">
                        <h3>{price*quantity.toFixed(2)}</h3>
                        <div className="btn">
                            <button className='minus-btn' onClick={()=>handleQuantity('-')}>-</button>
                            <input className='counter-field' type='text' value={quantity} disabled></input>
                            <button className='plus-btn' onClick={()=>handleQuantity('+')}>+</button>
                        </div>
                    </div>
                    <p className="pt-3">Quantity: {quantity}</p>
                    <div className="d-flex pt-3">
                        <Link to="/">
                            <Button className="btn btn-danger"> <FontAwesomeIcon icon={faCartArrowDown} /> Add</Button>
                        </Link>
                        <Link to="/shipment">
                            <Button className="btn btn-danger ml-4"><FontAwesomeIcon icon={faShippingFast} />Shipment</Button>
                        </Link>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={image} className="image-fluid display-img" alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodDetails;