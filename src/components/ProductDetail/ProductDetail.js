import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const first10 = fakeData.slice(0,20);
    const product = first10.find(pd => pd.key === productKey);
    // console.log(product);
    return (
        <div>
            {/* <h2>{productKey} product detail is here</h2> */}
            <h2>product detail is here</h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;