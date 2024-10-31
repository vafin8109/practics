import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderBanner from './components/HeaderBanner';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Users from './components/Users';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeaderBanner />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  );
};

export default App;