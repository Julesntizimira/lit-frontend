import { useState } from "react";



export default function CartProductContainer (props) {
    const {description, type, price, image_url, currency} = props.container
    const {setSubTotal} = props
    const [count, setCount] = useState(1);

    return (
        <div className="cart-product-container">
            <div className="cart-img-cont">
                <img src={image_url} alt="product-img"/>
            </div>
            <div className="cart-product-details">
                <div className="cart-product-name">
                    <p>{description}</p>
                    <p>{type}</p>
                </div>
                <p className="cart-product-id">#25139526913984</p>
            </div>
            <div className="cart-product-quantity">
                <div className="counter">
                    <i className="fa-solid fa-minus" onClick={() => {
                        setCount(prev => prev === 1 ? 1 : count - 1);
                        setSubTotal(prev => count === 1 ? prev : prev - price);
                    }}></i>
                    <p className="product-count">{count}</p>
                    <i className="fa-solid fa-plus" onClick={() => {
                        setCount(count + 1);
                        setSubTotal(prev => prev + price);
                    }}></i>
                </div>
                <span className="cart-product-price">{currency}{price * count}</span>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}