import React from 'react';
import { add } from '../../Utilities/Calculate';
// import add from '../../Utilities/Calculate.js';

const Cosmetics = () => {
    const a = 55;
    const b = 66;
    const total = add(a,b);
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cosmetics;