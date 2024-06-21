import { cart } from "../utils";
import { NavLink, Outlet } from "react-router-dom";

export default function Payment() {
    const subTotal = 0;
    const tax = subTotal * 18 / 100;
    const shipping =  subTotal * 3 / 100;
    const total = subTotal + tax + shipping;

    return (
        <section className="payment-section">
            <div className="payment-left-side">
                <h3>Summary</h3>
                <div className="product-to-pay">
                    <div className="product-to-pay-img-cont">
                        <img src={`../${cart[0].image_url}`} alt="product-img" />
                    </div>
                    <div className="product-to-pay-content">
                        <span>{cart[0].description}</span>
                        <span>${cart[0].price}</span>
                    </div>
                </div>
                <div className="product-to-pay">
                    <div className="product-to-pay-img-cont">
                        <img src={`../${cart[1].image_url}`} alt="product-img" />
                    </div>
                    <div className="product-to-pay-content">
                        <span>{cart[1].description}</span>
                        <span>${cart[1].price}</span>
                    </div>
                </div>
                <div className="product-to-pay">
                    <div className="product-to-pay-img-cont">
                        <img src={`../${cart[2].image_url}`} alt="product-img" />
                    </div>
                    <div className="product-to-pay-content">
                        <span>{cart[2].description}</span>
                        <span>${cart[2].price}</span>
                    </div>
                </div>
                <div className="product-payment-details">
                    <div className="shipment-info">
                        <div>
                            <p className="shipment-info-title">Address</p>
                            <p className="shipment-info-field">1131 Dusty Townline, Jacksonville, TX 40322</p>
                        </div>
                        <div>
                            <p className="shipment-info-title">Shipment method</p>
                            <p className="shipment-info-field">Free</p>
                        </div>
                    </div>
                    <div className="cart-form-prices">
                        <h3>Subtotal <span>${subTotal}</span></h3>
                        <div className="taxes-container">
                            <p>Estimated Tax <span>${tax}</span></p>
                            <p>Estimated shipping & Handling <span>${shipping}</span></p>
                        </div>
                        <h3>Total <span>${total}</span></h3>
                    </div>
                </div>
            </div>
            <div className="payment-right-side">
                <h3>Summary</h3>
                <div className="payment-tabs">
                    <NavLink to="">credit Card</NavLink>
                    <NavLink to="paypal">payPal</NavLink>
                    <NavLink to="paypalcredit">payPal Credit</NavLink>
                </div>
                <Outlet/>
            </div>
        </section>
    )
}