import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    a
  } from "react-router-dom";

//for using shortcut we have href write 'rsf = stateless component in VS'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/inventory">Manage inventory</a>
            </nav>
        </div>
    );
};
export default Header;