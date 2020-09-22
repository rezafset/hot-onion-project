import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import FoodDetails from '../FoodDetails/FoodDetails';

const FoodInfo = () => {
    const {foodKey} = useParams();
    const food = fakeData.find(fd=> fd.key===foodKey);
    return (
        <Container>
            <FoodDetails food={food}></FoodDetails>
        </Container>
    );
};

export default FoodInfo;