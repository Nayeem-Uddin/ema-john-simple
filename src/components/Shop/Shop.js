import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

function Shop(props) {
    //console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) =>{
        console.log('product added',product);
    }
    //console.log(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map(product => <Product 
                            handleAddProduct = {handleAddProduct}
                            product={product}>
                    </Product>)
                    }
            </div>
            <div className="cart-container">
                <h3>This is a cart</h3>
            </div>
        </div>
    );
}

export default Shop;