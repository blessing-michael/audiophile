import React from "react";
import { Link } from "react-router-dom"; // optional if you use React Router
import "./Footer.css";
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import insta from "../assets/images/insta.png"
// import "./Footer.css";


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content content-wrapper">
                <div className="footer-top">
                    <div className="footer-logo-nav">
                        <div className="footer-logo">audiophile</div>

                        <nav className="footer-nav">
                            <Link to="/">HOME</Link>
                            <Link to="/headphones">HEADPHONES</Link>
                            <Link to="/speakers">SPEAKERS</Link>
                            <Link to="/earphones">EARPHONES</Link>
                        </nav>
                    </div>


                </div>

                <div className="footer-bottom">
                    <p className="footer-description">
                        Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers
                        and sound specialists devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility — we’re open 7 days a week.
                    </p>

                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook">
                            {/* <img src="path/to/icon-facebook.svg" alt="Facebook" /> */}
                            <img src={facebook} alt="XX99 Mark II Headphones" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            {/* <img src="path/to/icon-twitter.svg" alt="Twitter" /> */}
                            <img src={twitter} alt="XX99 Mark II Headphones" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src={insta} alt="XX99 Mark II Headphones" />
                            {/* <img src="path/to/icon-instagram.svg" alt="Instagram" /> */}
                        </a>
                    </div>
                </div>
                <p className="footer-copyright">Copyright 2021. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
