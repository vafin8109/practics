import React from 'react';
import './styles/Footer.css';
import logo from '/vite.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="АвтоТорг Лого" className="footer-logo" />
                <nav className="footer-nav">
                    <a href="/" className="footer-link">Главная</a>
                    <Link to="/catalog"><a className="footer-link">Каталог</a></Link>
                    <a href="/" className="footer-link">Где нас найти</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;