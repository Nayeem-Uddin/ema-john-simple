import React, { useEffect, useState } from 'react'
import fakeData from '../../fakeData'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
import happyImage from '../../images/giphy.gif'


const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setorderPlaced] = useState(false)

    const handlePlaceOrder = () =>{
        // console.log('order placed');
        setCart([]);
        setorderPlaced(true)
        processOrder();
    }

    const handleRemoveProduct = (productKey) => {
        // console.log('product removed',productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        // const counts = productKeys.map(key => savedCart[key])
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProducts);
    }, [])
    
    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt="Your order successfully placed"/>
    }

    return (
        <div className="twin-container">
            <h2>cart items : {cart.length}</h2>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        product={pd}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
                { thankyou }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="cart-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    )
}

export default Review;