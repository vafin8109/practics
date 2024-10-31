import React from 'react';
import './styles/ProductCard.css';

const ProductCard = ({ image, title, price }) => (
    <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-title">{title}</h3>
        <div className="product-footer">
            <span className="product-price">{price} ₽</span>
            <button className="product-btn">Добавить в корзину</button>
        </div>
    </div>
);

export default ProductCard;