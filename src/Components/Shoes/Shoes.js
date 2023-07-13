import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const a = 13;
    const b = 11;
    const result = multiply(a,b);
const sum = add(a,b);
    return (
        <div>
            <h2>This is Shoe Store</h2>
            <p> multiply = {result} and sum = {sum} </p>
        </div>
    );
};

export default Shoes;