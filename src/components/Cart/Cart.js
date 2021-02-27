import './Cart.css'

import React from 'react';

function Cart(props) {
    const cart = props.cart;
    return (
        <div>
            <h3>This is a cart</h3>
            <h5>Items Ordered: {cart.length}</h5>
        </div>
    );
}

export default Cart;