import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../../Utilities/Calculate';



const Cosmetics = () => {
    const [cosmetics, setCosmetics]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    },[])

    const total = getTotal(cosmetics);
    // const consmetics = [
    //     {id: 1, name: "Alta", price: 100},
    //     {id: 2, name: "Kajol", price: 100},
    //     {id: 3, name: "Alta", price: 100},
    //     {id: 4, name: "Alta", price: 100}

    // ]
    // const consmetics = [
    //     {
    //       "id": "64b0dce654574ee468e89137",
    //       "price": 221,
    //       "name": "Ophelia Hart"
    //     },
    //     {
    //       "id": "64b0dce6f01ce17b288f35c1",
    //       "price": 319,
    //       "name": "Myrtle Bowen"
    //     },
    //     {
    //       "id": "64b0dce6a49978969683c52b",
    //       "price": 573,
    //       "name": "Alexander Clements"
    //     },
    //     {
    //       "id": "64b0dce6feb1805e344a41fa",
    //       "price": 584,
    //       "name": "Eaton Flynn"
    //     },
    //     {
    //       "id": "64b0dce6bf892216ce5cce56",
    //       "price": 574,
    //       "name": "Payne Keller"
    //     },
    //     {
    //       "id": "64b0dce62ad16872febc59be",
    //       "price": 457,
    //       "name": "Whitley Fox"
    //     }
    //   ]

    return (
        <div >
            <h1>Welcome to my Cosmetics Store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key = {cosmetic.id} cosmetic ={cosmetic}></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;