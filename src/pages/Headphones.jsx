import React from 'react'
import "./Headphones.css";
import xx99Image from "../assets/images/Group-3.png"; // ✅ import the image
import headphn2 from "../assets/images/headphone-2.png"; // ✅ import the image
import headphn3 from "../assets/images/headphn-3.png"; // ✅ import the image
import { Link } from "react-router-dom"; // Optional: if using React Router
import thumbnail from "../assets/images/thumbnail1.png"
import thumbnail2 from "../assets/images/thumbnail2.png"
import thumbnail3 from "../assets/images/thumbnail-3.png"
import brandimg from "../assets/images/Bitmap.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Import the angle icon



function Headphones() {
    return (
        <div>
            <section className="page-title-section">


                <h1>HEADPHONES</h1>
            </section>
            <main className='main-section'>


                <section className="product-listing-module product-xx99-mark-ii">
                    <div className="product-image-container">
                        <img src={xx99Image} alt="XX99 Mark II Headphones" />
                    </div>

                    <div className="product-text-container">
                        <h3>NEW PRODUCT</h3>
                        <h2>XX99 MARK II HEADPHONES</h2>
                        <p>
                            The new XX99 Mark II brings balanced sound and premium materials to
                            your listening experience. A perfect blend of style and substance.
                        </p>
                        <a href="/product/xx99-mark-ii" className="cta-button">
                            See Product
                        </a>
                    </div>
                </section>
                <section className="brand-promo-section">
                    <div className="brand-text-content">
                        <h2>
                            XX99 Mark I
                            HEADPHONES
                        </h2>
                        <p>
                            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                        </p>
                        <a href="/product/xx99-mark-ii" className="cta-button-b">
                            See Product
                        </a>
                    </div>

                    <div className="brand-image-container">

                        <img src={headphn2} alt="XX99 Mark II Headphones" />
                    </div>
                </section>
                <section className="product-listing-module product-xx99-mark-ii">
                    <div className="product-image-container">
                        <img src={headphn3} alt="XX99 Mark II Headphones" />
                    </div>

                    <div className="product-text-container">

                        <h2>XX59
                            Headphones</h2>
                        <p>
                            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                        </p>
                        <a href="/product/xx99-mark-ii" className="cta-button">
                            See Product
                        </a>
                    </div>
                </section>
                <section className="category-thumbnails">
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
            </main>


        </div>
    )
}

export default Headphones

