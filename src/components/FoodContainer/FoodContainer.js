import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import FoodItem from '../FoodItem/FoodItem';
import './FoodContainer.css';

const FoodContainer = (props) => {
    // console.log(fakeData);
    const [foods, setFoods] = useState(fakeData);
    // const [cart, setCart] = useState(fakeData);
    const [selectedFood, setSelectedFood] = useState("lunch");
    const setectedFoodItem = foods.filter(food=> food.category === selectedFood)
    return (
        <Container className="food-container">
            <Nav className="nav-container text-dark">
                <ul class="nav mx-auto">
                    <li onClick={()=>setSelectedFood("breakfast")} class="nav-item">
                        <Link to="/"style={{color: 'black'}} class={selectedFood === "breakfast" ? "nav-link active" : "nav-link"}>Breakfast</Link>
                    </li>
                    <li onClick={()=>setSelectedFood("lunch")} class="nav-item">
                        <Link to="/" style={{color: 'black'}} class={selectedFood === "lunch" ? "nav-link active" : "nav-link"}>Lunch</Link>
                    </li>
                    <li onClick={()=>setSelectedFood("dinner")} class="nav-item">
                        <Link to="/" style={{color: 'black'}} class={selectedFood === "dinner" ? "nav-link active" : "nav-link"}>Dinner</Link>
                    </li>
                </ul>
            </Nav>
            <div className="row">
                {
                    setectedFoodItem.map(food => <FoodItem handleFoodCart={props.handleFoodCart} food={food} ></FoodItem>)
                }
            </div>

            <div className="text-center py-3">
                {
                    props.cart.length ?
                    <Link to="/shipment">
                        <button  className="btn btn-danger">Check Out Food</button>
                    </Link>
                    :
                    <button disabled className="btn btn-secondary">Check Out Food</button>
                }
            </div>
        </Container>
    );
};

export default FoodContainer;