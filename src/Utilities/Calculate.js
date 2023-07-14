const add = (a,b) => {
    return a+b;
   }
const multiply =(a,b) => {
    return a*b;
   }
   const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}
export{add, 
    multiply ,
    getTotalPrice as getTotal}