import { useRouter } from "next/navigation";
import { useState } from "react";




export default function CartProductContainer (props: any) {
    const {description, type, price, image_url, currency} = props.container
    const {setSubTotal} = props
    const [count, setCount] = useState(1);

    const router = useRouter();
    const handleProductClick = () => {
      router.push("/product");
    };

    return (
        <div className="cart-product-container">
            <div className="cart-img-cont">
                < img src={image_url} alt="product-img" />
            </div>

            <div className="cart-product-content">
                <div className="cart-product-details">
                    <div className="cart-product-name" onClick={handleProductClick}>
                        <p>{description}</p>
                        <p>{type}</p>
                    </div>
                    <p className="cart-product-id">#25139526913984</p>
                </div>
                <div className="cart-product-quantity">
                    <div className="counter">
                        <i className="fa-solid fa-minus" onClick={() => {
                            setCount(prev => prev === 1 ? 1 : count - 1);
                            setSubTotal((prev: number) => count === 1 ? prev : prev - price);
                        }}></i>
                        <p className="product-count">{count}</p>
                        <i className="fa-solid fa-plus" onClick={() => {
                            setCount(count + 1);
                            setSubTotal((prev: any) => prev + price);
                        }}></i>
                    </div>
                    <span className="cart-product-price">{currency}{price * count}</span>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        
        </div>
    )
}