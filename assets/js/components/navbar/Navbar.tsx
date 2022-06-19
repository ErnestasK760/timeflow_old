import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

interface Props {

}

const Navbar: React.FC<Props> = () => {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/content">Content</NavLink>
                    <NavLink to="/about">About</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;