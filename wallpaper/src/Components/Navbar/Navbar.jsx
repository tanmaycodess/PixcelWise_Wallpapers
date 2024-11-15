import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active links
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import styles from './Navbar.module.css'; // Import your CSS Module

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false); // State to toggle navbar on mobile

    // Toggle the navbar on mobile
    const toggleNavbar = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
            <div className="container-fluid">
                {/* Logo */}
                <NavLink className={`navbar-brand ${styles.navbarBrand}`} to="/">
                    <h1>PixcelWise</h1>
                </NavLink>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <FaBars />
                </button>

                {/* Navbar Links */}
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                                }
                                to="/abstract"
                            >
                                Abstract
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                                }
                                to="/nature"
                            >
                                Nature
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                                }
                                to="/city"
                            >
                                Cityscape
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
