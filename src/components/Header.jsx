import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; // ✅ direct import
import carticon from "../assets/images/cart-icon.svg"




const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">


                {/* Logo */}
                <div className="header-logo">audiophile</div>

                {/* Navigation */}
                <nav className="header-nav">
                    <a href="/">Home</a>
                    <a href="/headphones">Headphones</a>
                    <a href="/speakers">Speakers</a>
                    <a href="/earphones">Earphones</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="header-icons">
                    <img src={carticon} alt="XX99 Mark II Headphones" />
                    {/* <FontAwesomeIcon icon={faCartShopping} className="cart-icon" /> */}
                </div>
            </div>


        </header>

    );
};

export default Header;
