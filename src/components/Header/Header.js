import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/faculty">Faculty</a>
                <a href="/research">Research</a>
            </nav>
        </div>
    );
};

export default Header;