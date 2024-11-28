import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Sidebar from './Components/sidebar';
import Product from './Components/product'
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <Sidebar />
                <Product />
            </div>
            <Footer />
        </div>
    );
};

export default App;
