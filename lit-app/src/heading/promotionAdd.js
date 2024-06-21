import { Link } from "react-router-dom";

export default function PromotionAdd() {
    return (
        <div className="promotion-add-wrapper">
            <div className="promotion-add">
                <div className="promotion-cont">
                    <Link className="promotionadd-cont-link" to="">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Link>
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