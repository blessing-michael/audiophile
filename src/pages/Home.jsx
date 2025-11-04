import React from "react";
import { Link } from 'react-router-dom';
import heroHeadphones from "../assets/images/Bitmap (2).png"
import "./Home.css";
import "./Headphones.css";
import thumbnail from "../assets/images/thumbnail1.png"
import thumbnail2 from "../assets/images/thumbnail2.png"
import thumbnail3 from "../assets/images/thumbnail-3.png"
import zx9Speaker from "../assets/images/speaker.png"
import zx7Speaker from "../assets/images/z-speaker.png"
import yx1Earphones from "../assets/images/yx1-earphone.png"
import brandimg from "../assets/images/Bitmap.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Import the angle icon

const Home = () => {
    return (
        <main>
            <section className="hero-block">
                <div className="hero-content content-wrapper">
                    <div className="hero-details">
                        <p className="overline-text">NEW PRODUCT</p>
                        <h1 className="hero-title">XX99 MARK II HEADPHONES</h1>
                        <p className="hero-description">
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </p>
                        <Link to="/product/xx99-mark-ii" className="btn-primary">SEE PRODUCT</Link>
                    </div>
                    {/* The image is often positioned absolutely or via CSS for the overlap effect */}
                    <div className="hero-image">
                        <img src={heroHeadphones} alt="XX99 Mark II Headphones" />
                    </div>
                </div>
            </section>
            <div className="main-home-content">
                <section className="category-thumbnails ">
                    <Link to="/category/headphones" className="category-item">
                        {/* <img src="path/to/headphones-thumb.png" alt="Headphones Thumbnail" /> */}
                        <img src={thumbnail2} alt="XX99 Mark II Headphones" />
                        <p>HEADPHONES</p>
                        {/* The SHOP Text and Icon */}
                        <div className="shop-link-container">
                            <span className="shop-text">SHOP</span>
                            <FontAwesomeIcon icon={faAngleRight} className="shop-angle-icon" />
                        </div>
                    </Link>

                    <Link to="/category/speakers" className="category-item">
                        {/* <img src="path/to/speakers-thumb.png" alt="Speakers Thumbnail" /> */}
                        <img src={thumbnail} alt="XX99 Mark II Headphones" />
                        <p>SPEAKERS</p>
                        {/* The SHOP Text and Icon */}
                        <div className="shop-link-container">
                            <span className="shop-text">SHOP</span>
                            <FontAwesomeIcon icon={faAngleRight} className="shop-angle-icon" />
                        </div>
                    </Link>

                    <Link to="/category/earphones" className="category-item">
                        <img src={thumbnail3} alt="XX99 Mark II Headphones" />
                        {/* <img src="path/to/earphones-thumb.png" alt="Earphones Thumbnail" /> */}
                        <p>EARPHONES</p>
                        {/* The SHOP Text and Icon */}
                        <div className="shop-link-container">
                            <span className="shop-text">SHOP</span>
                            <FontAwesomeIcon icon={faAngleRight} className="shop-angle-icon" />
                        </div>
                    </Link>
                </section>
                <section className="zx9-promo-section content-wrapper">
                    {/* ADD THIS WRAPPER FOR THE LARGE BACKGROUND CIRCLE */}
                    <div className="zx9-promo-circles">
                        <div className="large-circle"></div>
                    </div>



                    <div className="zx9-image">
                        <img src={zx9Speaker} alt="ZX9 Speaker" />
                    </div>

                    <div className="zx9-details">
                        <h2>ZX9 SPEAKER</h2>
                        <p>
                            Upgrade to premium speakers that are engineered for high-fidelity audio
                            reproduction.
                        </p>
                        <Link to="/product/zx9-speaker" className="btn-secondary">
                            SEE PRODUCT
                        </Link>
                    </div>
                </section>

                <section
                    className="zx7-banner"
                    style={{ backgroundImage: `url(${zx7Speaker})` }}
                >
                    <div className="promo-text-details">
                        <h2>ZX7 SPEAKER</h2>
                        <a href="/product/zx7-speaker" className="btn-ghost">SEE PRODUCT</a>
                    </div>
                </section>
                {/* YX1 EARPHONES PROMOTION (Two-Column Split Card) */}
                <section className="yx1-promotion-section content-wrapper">

                    {/* 1. IMAGE CONTAINER (Left Column) */}
                    <div className="yx1-image-container">
                        {/* Replace {yx1Earphones} with your correct image import */}
                        <img src={yx1Earphones} alt="YX1 Earphones" />
                    </div>

                    {/* 2. TEXT/DETAILS CONTAINER (Right Column) */}
                    <article className="yx1-details-container">
                        <h2>YX1 EARPHONES</h2>
                        <Link to="/product/yx1-earphones" className="btn-ghost">SEE PRODUCT</Link>
                    </article>

                </section>
                <section className="brand-promo-section-2">
                    <div className="brand-text-content-2">
                        <h3>
                            BRINGING YOU THE <span className="highlight">BEST AUDIO GEAR</span>
                        </h3>
                        <p>
                            Located at the heart of the city, <span className="brand-name">audiophile</span> is the premier store for
                            high-end headphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                            rooms to try before you buy. Come and visit our shop to meet some of the fantastic people who make{" "}
                            <span className="brand-name">audiophile</span> the best place to buy your portable audio equipment.
                        </p>
                    </div>

                    <div className="brand-image-container-2">
                        <img src={brandimg} alt="XX99 Mark II Headphones" />
                    </div>
                </section>




            </div>
        </main>
    );
};

export default Home;
