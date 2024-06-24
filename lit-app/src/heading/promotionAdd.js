import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const promoAdsArray = [
    "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
    "Big Winter Blowout! Up to 60% OFF All Outerwear + Free Overnight Shipping!",
    "Spring Fling! 40% OFF All Dresses + Complimentary Next-Day Delivery!",
    "Fall Frenzy! Buy One Get One 50% OFF All Shoes + Free Express Shipping!",
    "Holiday Mega Sale! 50% OFF All Electronics + Free 2-Day Delivery!",
    "Back to School Bash! 30% OFF All Backpacks + Free Same-Day Shipping!"
]
export default function PromotionAdd() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex => (prevIndex + 1) % promoAdsArray.length);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Cleanup function to clear the timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="promotion-add-wrapper">
            <div className="promotion-add">
                <div className="promotion-cont">
                    <Link className="promotionadd-cont-link" to="">{promoAdsArray[index]}</Link>
                    <Link className="promotionadd-shop-link" to="">Shop now</Link> 
                </div>
                <div className="lang">
                    <p>English</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    )
}