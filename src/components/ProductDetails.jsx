import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../productsData';
import './styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <div className="product-details">
            <button className="back-button" onClick={() => navigate('/catalog')}>
                ← В каталог
            </button>
            <div className="product-content">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
                <div className="product-info">
                    <h1 className='product-title'>{product.title}</h1>
                    <p className="product-description">
                        {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    </p>
                    <div className="product-footer">
                        <span className="product-price">{product.price} ₽</span>
                        <button className="add-to-cart">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;