import React from 'react';

function Product(props) {
    // console.log(props.product.name);
    // const {name, category} = props.product;
    return (
        <div>
            <h4>{props.product.name}</h4>
        </div>
    );
}

export default Product;