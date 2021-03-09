import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, seller, quantity, key , price} = props.product;
    const handleRemoveProduct = props.handleRemoveProduct;
    const reviewProductStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div style = {reviewProductStyle} className="reviewItems">
           <h6 style={{color: 'blue'}}>{name}</h6> 
           <h4>By : {seller}</h4>
           <h4><small>price:$ {price}</small></h4>
           <h3>quantity: {quantity}</h3>
           <button 
                className='cart-btn' 
                onClick={()=>handleRemoveProduct(key)}
                >Remove Item
           </button>
        </div>
    );
};

export default ReviewItem;