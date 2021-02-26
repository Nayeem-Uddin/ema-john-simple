import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

//for using shortcut we have to write 'rsf = stateless component in VS'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Review Order</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;