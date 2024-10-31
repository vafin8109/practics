import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/User.css';

const User = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const addedUser = await response.json();
                setUsers((prevUsers) => [...prevUsers, addedUser]);
                setMessage(`Пользователь "${name}" успешно добавлен!`);
                setName('');
                setEmail('');
            } else {
                setMessage('Ошибка при добавлении пользователя.');
            }
        } catch (error) {
            setMessage('Произошла ошибка при добавлении пользователя.');
        }

        setTimeout(() => setMessage(''), 3000);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="users-page container">
            <div className="header-container">
                <h2 className="title">Список пользователей</h2>
                <Link to="/" className="home-button">Вернуться на главную</Link>
            </div>

            <input
                type="text"
                placeholder="Поиск пользователей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                />
                <button type="submit" className="submit-button">Добавить пользователя</button>
            </form>

            {message && <div className="message">{message}</div>}

            <div className="user-grid">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        Пользователь с именем "{searchTerm}" не найден
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
