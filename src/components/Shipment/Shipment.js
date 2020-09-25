import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import FoodOrder from '../FoodOrder/FoodOrder';
import { useAuthentication } from '../Login/UseAuth';
import './Shipment.css';
import { useHistory } from 'react-router-dom';

const Shipment = () => {
    const [cart, setCart] = useState([])
    const auth = useAuthentication();

    let history = useHistory()
    const handlePlaceOrder = () =>{
        history.push("/delivery");
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const foodKey = Object.keys(saveCart);
        // console.log(foodKey);
        const foodItem = foodKey.map(key=>{
            const food = fakeData.find(fd => fd.key ===key)
            food.quantity = saveCart[key]; 
            return food;
        })
        setCart(foodItem);
        console.log(foodItem);
    }, [])

    const removeFood = (foodKey) =>{
        const newCart = cart.filter(fd=> fd.key !== foodKey);
        setCart(newCart);
        removeFromDatabaseCart(foodKey);
    }

    const total = cart.reduce((total, food) => total + food.price * food.quantity, 0)
    // console.log(total);
    const tax = total/10;
    const deliveryFee = total/8;
    const grandTotal = total + tax + deliveryFee;
    const formatNumber = num =>{
        const number = Number(num.toFixed(2));
        return number;
    }

    return (
        <Container>
            <Row>
                <Col md={5} className="my-5 pt-5">
                    <h2 className="text-center">Delivery Detail</h2>
                    <Form className="pt-3">
                        <Form.Group controlId="formBasicUsername">
                            <Form.Control type="text" name="name" defaultValue={auth.user.displayName} placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" name="email" defaultValue={auth.user.email} placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="text" placeholder="Enter Mobile Number" required />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="Enter Address" as="textarea" rows="3" required />
                        </Form.Group>
            
                        <Button className="btn-block" variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={7} className="d-flex justify-content-center py-4">
                    <div className="">
                        <p>From <b>Chawkbazar</b>, post office goli. Arriving in 20-30 min.</p>
            
                        {
                            cart.map(fd=> <FoodOrder removeFood={removeFood} key={fd.key} food={fd} cart={cart}></FoodOrder>)
                        }
                        <p>Subtotal : ${formatNumber(total)}</p>
                        <p>Tax : ${formatNumber(tax)}</p>
                        <p>Delivery Fee : ${formatNumber(deliveryFee)}</p>
                        <h5>Total : ${formatNumber(grandTotal)}</h5>
                        <Button onClick={handlePlaceOrder} variant="danger" className="btn-place-order mt-3 btn-block">Place Order</Button> 
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Shipment;