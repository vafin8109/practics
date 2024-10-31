import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/HeaderBanner.css';

const HeaderBanner = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Для аккордеона

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        { title: "О нашей компании", content: "Информация о компании..." },
        { title: "Наши услуги", content: "Описание услуг..." },
        { title: "Контактная информация", content: "Как с нами связаться..." },
    ];

    return (
        <div className="header-banner">
            <header className="header">
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">О нас</Link></li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/">Где нас найти</Link></li>
                        <li><Link to="/users">Пользователи</Link></li>
                    </ul>
                </nav>
                <div className="logo">
                    <img src="/vite.svg" alt="Logo" />
                </div>
                <div className="auth-buttons">
                    <button className="register">Регистрация</button>
                    <button className="login">Вход</button>
                </div>
            </header>

            <div className="banner">
                <img src="/banner/banner.jpg" alt="Banner" className="banner-image" />
                <button className="about-button">
                    <span className='first-text'>
                        О компании
                    </span>
                    <span className='second-text'>
                        АвтоТорг
                    </span>
                </button>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div><img src="/catalog/photo4.webp" alt="Slide 3" /></div>
                    <div><img src="/catalog/photo4.webp" alt="Slide 3" /></div>
                    <div><img src="/catalog/photo4.webp" alt="Slide 3" /></div>
                </Slider>
            </div>

            <div className="accordion">
                {accordionData.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                            {item.title}
                            <span className="accordion-icon">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeaderBanner;