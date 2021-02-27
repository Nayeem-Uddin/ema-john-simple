import './Cart.css'

import React from 'react';

function Cart(props) {
    const cart = props.cart;
    const total = cart.reduce((total, pdPrice) => total + pdPrice.price, 0)
    // let total = 0;
    // for(let i = 0; i < cart.length ; i++){
    //     const pdPrice = cart[i];
    //     total = total+pdPrice.price;
    // }

    let shipping = 0;
    if(total>200){
        shipping = 0
    }else if(total>100){
        shipping = 5.00
    }else if(total>0){
        shipping = 10.00
    }


    let tax = total/10;


    let grandTotal = total + shipping + tax;


    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return precision;
    }

    
    return (
        <div>
            <h3>This is a cart</h3>
            <h5>Items Ordered : {cart.length}</h5>
            <h5>Product Price : {formatNumber(total)}</h5>
            <p><small>Shipping Cost : {formatNumber(shipping)}</small></p>
            <p><small>tax+VAt : {formatNumber(tax)}</small></p>
            <h3>Total Price : {formatNumber(grandTotal)} </h3>
        </div>
    );
}

export default Cart;