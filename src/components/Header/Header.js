import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuthentication } from '../Login/UseAuth';

const Header = (props) => {
    const auth = useAuthentication();
    return (
        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link to="/" class="navbar-brand">
                    <img src="./logo2.png" alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-link mt-2"><FontAwesomeIcon icon={faShoppingCart} /> <span className="text-danger">{props.cart.length}</span> </Link>
                        {
                            auth.user ?
                            <Link to="/" className="nav-link mt-2">{auth.user.displayName}</Link> 
                            :
                            <Link to="/login" class="nav-item nav-link" >
                                Log In
                            </Link>
                        }
                        {
                            auth.user ?
                            <Link to="/" className="nav-link">
                                    <button onClick={() => {auth.signOut()}} className="btn btn-danger btn-rounded">Sign Out</button>
                            </Link>
                            :
                            <Link to="/login" class="nav-item nav-link" >
                                <button type="button" class="btn btn-danger">Sign Up</button>
                            </Link>
                        }
                    </div>
                </div>
            </Container>
        </Nav>
    );
};

export default Header;