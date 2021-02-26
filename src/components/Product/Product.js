import React from 'react';
import './Product.css'

function Product(props) {
    console.log(props.product);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <p>{price}</p>
                <p>Only {stock} left in stock - order soon</p>
            </div>
        </div>

    );
}

export default Product;