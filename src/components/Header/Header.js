import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link to="/" class="navbar-brand">
                    <img src="./logo2.png" alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mt-2 active">
                            <Link class="nav-link"><FontAwesomeIcon icon={faShoppingCart} /> <span className="text-danger">{props.cart.length}</span> </Link>
                        </li>
                        <li class="nav-item mt-2">
                            <Link class="nav-link">Login </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">
                                <button className="btn btn-danger btn-rounded">Sign Up</button>
                            </Link>
                        </li>               
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Header;