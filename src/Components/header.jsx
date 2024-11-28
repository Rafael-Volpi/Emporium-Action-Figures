import React from 'react';
import logo from '../img/logo.jpg'

// Header Component
const Header = () => {
    return (
        <header>
            <div id='header_logo'>
                <img src={logo} alt="Logo" />
                <h2>Figure Emporium</h2>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Pesquise aqui..." class="search-bar"/>
                    <button class="search-btn">🔍</button>
            </div>
            <div>

            </div>
            <div id='header_btt'>
                <h3>Produtos</h3>
                <h3>Contato</h3>
                <h2>🛒</h2>
            </div>
        </header>
    );
};


export default Header;
