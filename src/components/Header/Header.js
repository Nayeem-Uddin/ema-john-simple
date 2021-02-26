import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

//for using shortcut we have to write 'rsf = stateless component in VS'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;