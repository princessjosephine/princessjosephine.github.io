import React from 'react';
import { NavLink } from 'react-router-dom';
import constantsBackground from '../assets/constantsBackground.jpeg';
import './ConstantsIndex.css'; // Ensure this imports your CSS

function Header() {
    const backgroundStyle = {
            backgroundImage: `url(${constantsBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };

    return (
        <div style = {backgroundStyle}>
            <header>
                <h1 className="Header-name">JOSEPHINE UDOUNWA</h1>
                <nav className="Header-menu">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/home"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/skills-and-experience"
                                activeClassName="active"
                            >
                                Skills and Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                activeClassName="active"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
