import React from 'react';
import './FoodOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const FoodOrder = (props) => {
    const {image, price, quantity, name, key} = props.food;
    
    return (
        <div className="order-container d-flex justify-content-between align-items-center mb-2">
            <div className="item-order d-flex">
                <div className="order-image pt-3 ml-2">
                    <img src={image} alt=""/>
                </div>
                <div className="ml-3">
                    <h5>{name}</h5>
                    <p>${price}</p>
                    <p>Total Selected: {quantity}</p>
                </div>
            </div>
            <div className="mr-4">
                <Button onClick={()=>props.removeFood(key)} className="btn-danger"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </div>
        </div>
    );
};

export default FoodOrder;