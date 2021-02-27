import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

function Product(props) {
    // console.log(props);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button className='cart-btn' onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
            </div>
        </div>

    );
}

export default Product;