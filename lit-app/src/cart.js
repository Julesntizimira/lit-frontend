import { useEffect, useState } from "react";
import CartProductContainer from "./cartProductContainer";
import Footer from "./footer";
import { cart } from "./utils";

export default function Cart () {
    const [subTotal, setSubTotal] = useState(0);
    let price = 0;
    const tax = subTotal * 18 / 100;
    const shipping =  subTotal * 3 / 100;
    const total = subTotal + tax + shipping;

    useEffect(() => {
        setSubTotal(price)
    }, [price])
    return (
        <>
            <section className="cart-section">
                <div className="cart-section-wrapper">
                    <div className="cart-left-side">
                        <h2 className="section-title">Shopping Cart</h2>
                        <div className="cart-products">
                            {
                                cart.map((product) => {
                                    price += product.price;
                                    return(
                                        <>
                                         <CartProductContainer 
                                            container={product}
                                            setSubTotal={setSubTotal}
                                        />
                                         <div className="divider"></div>
                                        </>
                                    )
                                })
                                
                            }

                        </div>
                     
                    </div>
                    <div className="cart-right-side">
                        <h2>Order Summary</h2>
                        <form className="cart-form">
                            <label className="cart-label" htmlFor="promo-code">
                                Discount code / Promo code
                                <input id="promo-code" placeholder="Code"/>
                            </label>
                            <label className="cart-label" htmlFor="bonus-card">
                                Your bonus card number
                                <input id="bonus-card" placeholder="Enter Card Number"/>
                            </label>
                            <div className="cart-form-prices">
                                <h3>Subtotal <span>${subTotal}</span></h3>
                                <div className="taxes-container">
                                    <p>Estimated Tax <span>${tax}</span></p>
                                    <p>Estimated shipping & Handling <span>${shipping}</span></p>
                                </div>
                                <h3>Total <span>${total}</span></h3>
                            </div>
                            <button className="checkout btn">Checkout</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}