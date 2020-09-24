import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../src/fakeData';
import {addToDatabaseCart, getDatabaseCart} from './utilities/databaseManager';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import FoodContainer from './components/FoodContainer/FoodContainer';
import FoodInfo from './components/FoodInfo/FoodInfo';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AuthContextProvider } from './components/Login/UseAuth';
import Banner from './components/Banner/Banner';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import FoodDelivery from './components/FoodDelivery/FoodDelivery';

function App() {

  const [foods, setFoods] = useState(fakeData);
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    const saveCart = getDatabaseCart();
    const foodKey = Object.keys(saveCart);
      const foodItem = foodKey.map(key=>{
        const food = fakeData.find(fd => fd.key === key);
        food.quantity = saveCart[key];
        return food;
      })
      setCart(foodItem);
  }, [])
  
  const handleFoodCart = (food) =>{
    const sameFood = cart.find(fd => fd.key === food.key);
    let count = 1;
    let newCart;
    if(sameFood){
      count = sameFood.quantity + 1;
      sameFood.quantity = count;
      const other = cart.filter(fd => fd.key!== food.key);
      newCart = [...other, sameFood];
    }
    else{
      food.quantity = 1
      newCart = [...cart, food];
    }
    setCart(newCart);
    addToDatabaseCart(food.key, count);
  }

  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Header cart ={cart}></Header>
            <Login></Login>
          </Route>
          <Route exact path="/">
              <Header cart ={cart}></Header>
              <Banner></Banner>
              <FoodContainer handleFoodCart={handleFoodCart} cart={cart}></FoodContainer>
              <ChooseUs></ChooseUs>
              <Footer></Footer>
          </Route>
          <Route path="/food/:foodKey">
              <Header cart ={cart}></Header>
              <FoodInfo></FoodInfo>
          </Route>
          <PrivateRoute path="/shipment">
            <Header cart={cart}></Header>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/delivery">
            <Header cart ={cart}></Header>
            <FoodDelivery></FoodDelivery>
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
