import { useState } from "react";
import Card from "./home/card";
import Path from "./products/path";
import { cards } from "./utils";

export default function Product () {
    const normalOverlayerStyle = {
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.467) 15%, rgba(255, 255, 255, 0.861) 70%,  rgb(255, 255, 255) 15%)"
    }
    const [overlayerStle, setOverlayerStyle] = useState(normalOverlayerStyle);
    const [reviewsHeight, setReviewsHeight] = useState("856px");
    const [viewMoreBtn, setViewMoreBtn] = useState("View More");
     
    return (
        <>
            <Path container={{path: [
                "Catalog",
                "Smartphones",
                "Apple",
                "Iphone 14 Pro Max"
            ]}}/>
            <section className="single-product-page-wrapper">
                <div className="product-images">
                    <div className="small-images"> 
                        <div className="small-product-img">
                            <img src="images/productPage/img.png" alt="small-img"/>
                        </div>
                        <div className="small-product-img">
                            <img src="images/productPage/img.png" alt="small-img"/>
                        </div>
                        <div className="small-product-img">
                            <img src="images/productPage/img.png" alt="small-img"/>
                        </div>
                        <div className="small-product-img">
                            <img src="images/productPage/img.png" alt="small-img"/>
                        </div>
                    </div>
                    <div className="big-image-cont">
                        <img src="images/productPage/img.png" alt="small-img"/>
                    </div>
                </div>
                <div className="product-content">
                    <h2 className="product-title">Apple Iphone 14 Pro Max</h2>
                    <p className="product-price">$1399</p>
                    <div className="product-color-selection">
                        <p>Select color:</p>
                        <div className="colors">
                            <div className="color-cont"></div>
                            <div className="color-cont"></div>
                            <div className="color-cont"></div>
                            <div className="color-cont"></div>
                            <div className="color-cont"></div>
                        </div>
                    </div>
                    <div className="product-capacity">
                        <p className="capacity">128GB</p>
                        <p className="capacity">256GB</p>
                        <p className="capacity">512GB</p>
                        <p className="capacity">1TB</p>
                    </div>
                    <div className="product-specs">

                        <div className="spec-container">
                            <i className="fa-solid fa-mobile"></i>
                            <div className="spec-content">
                                <p className="spec">Screen size</p>
                                <p className="spec-detail">6.7</p>
                            </div>
                        </div>
                        <div className="spec-container">
                            <i className="fa-solid fa-microchip"></i>
                            <div className="spec-content">
                                <p className="spec">CPU</p>
                                <p className="spec-detail">Apple A16 Bionic</p>
                            </div>
                        </div>
                        <div className="spec-container">
                            <i className="fa-solid fa-microchip"></i>
                            <div className="spec-content">
                                <p className="spec">Number of Cores</p>
                                <p className="spec-detail">6</p>
                            </div>
                        </div>
                        <div className="spec-container">
                            <i className="fa-solid fa-camera"></i>
                            <div className="spec-content">
                                <p className="spec">Main Camera</p>
                                <p className="spec-detail">48-12-12 MP</p>
                            </div>
                        </div>
                        <div className="spec-container">
                            <i className="fa-solid fa-camera-rotate"></i>
                             <div className="spec-content">
                                <p className="spec">Front-camera</p>
                                <p className="spec-detail">12 MP</p>
                            </div>
                        </div>
                        <div className="spec-container">
                            <i className="fa-solid fa-battery-three-quarters"></i>
                            <div className="spec-content">
                                <p className="spec">Battery Capacity</p>
                                <p className="spec-detail">4323 mah</p>
                            </div>
                        </div>
                    </div>
                    <p className="product-description">
                        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. 
                        Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
                    </p>
                    <div className="product-buttons">
                        <button className="wish-btn">Add to Wishlist</button>
                        <button className="wish-btn">Add to Cart</button>
                    </div>
                    <div className="product-buttons">
                        <button className="cart-btn">Buy Now</button>
                    </div>
                    <div className="features">
                        <div className="feature-container">
                            <div className="feature-icon">
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <div className="feature-content">
                                <p className="feature">Free Delivery</p>
                                <p className="feature-details">1-2 days</p>
                            </div>
                        </div>
                        <div className="feature-container">
                            <div className="feature-icon">
                                <i className="fa-solid fa-store"></i>
                            </div>
                            <div className="feature-content">
                                <p className="feature">In Stock</p>
                                <p className="feature-details">Today</p>
                            </div>
                        </div>
                        <div className="feature-container">
                            <div className="feature-icon">
                                <i className="fa-solid fa-certificate"></i>
                            </div>
                            <div className="feature-content">
                                <p className="feature">Guaranteed</p>
                                <p className="feature-details">1year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="details-section">
                <div className="details-section-wrapper">
                    <div className="product-details-container">
                        <h2 className="section-title">Details</h2>
                        <p className="product-details-description">
                            Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. 
                            Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. 
                            And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. 
                            And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                        </p>
                    </div>
                    <div className="product-details-container">
                        <h2 className="section-title">Screen</h2>
                        <div className="product-catalog">
                            <p className="catalog-feature">
                                <span>Screen Diagonal</span>
                                <span>6.7"</span>
                            </p>
                            <p className="catalog-feature">
                                <span>The screen resolution</span>
                                <span>2796*1290</span>
                            </p>
                            <p className="catalog-feature">
                                <span>The screen refresh rate</span>
                                <span>120 Hz</span>
                            </p>
                            <p className="catalog-feature">
                                <span>The pixel density</span>
                                <span>460 ppi</span>
                            </p>
                            <p className="catalog-feature">
                                <span>Screen type</span>
                                <span>OLED</span>
                            </p>
                            <p className="catalog-feature">
                                <span>Additionaly</span>
                                <span>Dynamic Island<br/>Always-On display<br/>HDR display<br/>True Tone<br/>Wide color (P3)</span>
                            </p>
                        </div>
                    </div>
                    <div className="product-details-container">
                        <h2 className="section-title">CPU</h2>
                        <div className="product-catalog">
                            <p className="catalog-feature">
                                <span>CPU</span>
                                <span>A16 Bionic</span>
                            </p>
                            <p className="catalog-feature">
                                <span>Number of cores</span>
                                <span>6</span>
                            </p>
                        </div>
                    </div>
                    <button className="view-more-btn">View More</button>
                </div>
            </section>
            <section className="review-section">
                <div className="review-top">
                    <h2 className="section-title">Review</h2>
                    <div className="overall-rating-cont">
                        <div className="overall-rating">
                            <div className="rate-reviews-cont">
                                <span className="overall-rate">4.8</span>
                                <span className="total-reviews">of 125 reviews</span>
                            </div>
                            <div className="review-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                
                            </div>
                        </div>
                        <div className="schedule">
                            <div className="level">
                                <span className="level-name">Excellent</span>
                                <p>
                                    <p style={
                                            {
                                                backgroundColor: "#FFB547",
                                                height: "100%",
                                                width: "80%"
                                            }
                                        }></p>
                                </p>
                                <span className="reviews">100</span>
                            </div>
                            <div className="level">
                                <span className="level-name">Good</span>
                                <p>
                                    <p style={
                                        {
                                            backgroundColor: "#FFB547",
                                            height: "100%",
                                            width: "15%"
                                        }
                                    }></p>
                                </p>
                                <span className="reviews">11</span>
                            </div>
                            <div className="level">
                                <span className="level-name">Average</span>
                                <p>
                                    <p style={
                                            {
                                                backgroundColor: "#FFB547",
                                                height: "100%",
                                                width: "10%"
                                            }
                                        }></p>
                                </p>
                                <span className="reviews">3</span>
                            </div>
                            <div className="level">
                                <span className="level-name">Below Average</span>
                                <p>
                                    <p style={
                                            {
                                                backgroundColor: "#FFB547",
                                                height: "100%",
                                                width: "5%"
                                            }
                                        }></p>
                                </p>
                                <span className="reviews">8</span>
                            </div>
                            <div className="level">
                                <span className="level-name">Poor</span>
                                <p>
                                    <p style={
                                            {
                                                backgroundColor: "#FFB547",
                                                height: "100%",
                                                width: "3%"
                                            }
                                        }></p>
                                </p>
                                <span className="reviews">1</span>
                            </div>
                        </div>
                    </div>
                    <input placeholder="Leave Comment"/>
                </div>
                <div className="reviews-wrapper" >
                    <div className="reviews-container-wrapper" style={
                           {
                                height: reviewsHeight
                           }
                        }>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="user-photo-cont">
                                <img src="images/profilePic/user.png" alt="profile-pic"/>
                            </div>
                            <div className="review-content">
                                <div className="review-title">
                                    <span className="review-user-name">Grace Carey</span>
                                    <span className="review-date">24 January, 2023</span>
                                </div>
                                <div className="review-stars"></div>
                                <p className="review-comment">
                                    I was a bit nervous to be buying a secondhand phone from Amazon,
                                    but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, 
                                    since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. 
                                    It was super easy to set up and the phone works and looks great. It truly was in excellent condition. 
                                    Highly recommend!!!🖤
                                </p>
                            </div>
                        </div>
                        <div className="opac-overlayer" style={
                            overlayerStle
                        }></div>
                    </div>
               
                    <button className="view-more-btn" 
                        onClick={
                            () => {
                                setReviewsHeight(prev => prev === "856px" ? "auto" : "856px");
                                setOverlayerStyle(prev => prev.background === normalOverlayerStyle.background ? {height: "0"} : normalOverlayerStyle)
                                setViewMoreBtn(prev => prev === "View More" ? "View Less" : "View More");
                            }
                        }
                    >{viewMoreBtn}</button>
                </div>
            </section>
            <section className="categories-section">
                    <div className="categories-section-container">
                        <h2 className="section-title">Related Products</h2>
                
                        <div className="categories-wrapper">
                            {
                                cards.map((card) => {
                                    return(
                                        <Card container={card}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
        </>
     
    )
}