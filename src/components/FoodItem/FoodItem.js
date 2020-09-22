import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css';
const FoodItem = (props) => {
    const {image, name, title ,price, key} = props.food;
    return (
        <div className="col-md-4 text-center py-2">
            <Link to={"/food/"+ key} onClick={() => props.handleFoodCart(props.food)} style={{ textDecoration: 'none', color: 'black' }}>
                <Card className="cart-container p-3">
                    <Card.Img className="img mx-auto" variant="top" src={image} />
                    <Card.Body>
                        <Card.Text>
                            <p><b>{name}</b></p>
                            <p>{title}</p>
                            <p>${price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default FoodItem;