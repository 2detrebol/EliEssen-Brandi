import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import NavLinks from '../Navlinks/NavLinks';
import './Navbar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Navbar sticky="top" className="navContainer">
            <div className="navLogo animate__animated animate__fadeIn animate__delay-1s">
                <NavLink className="containerDrew animate__animated animate__fadeInLeft animate__delay-1s" to="/">
                    <img className="imgLogo" src="https://i.imgur.com/BirJ9jh.png" alt="Logo Essen" />
                </NavLink>
                <div className="shipments animate__animated animate__fadeInDown animate__delay-1s">
                    <FaShippingFast />
                    <p>ENVIOS SIN CARGO A TODO EL PAÍS</p>
                </div>
                <CartWidget />
            </div>
            <NavLinks />
        </Navbar >
    );
}

export default NavBar;
