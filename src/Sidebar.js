import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
    
    var isMenuOpen = function(state) {
        
        document.getElementById("main").style.marginLeft = state.isOpen ? "20vw" : "0vw";
        return state.isOpen;
    };
    
    return (
        <Menu id="menu" noOverlay onStateChange={isMenuOpen}>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Salads
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
        </Menu>
    );
};