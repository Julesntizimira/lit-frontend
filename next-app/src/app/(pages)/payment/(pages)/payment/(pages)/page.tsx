"use client"

import { useRouter } from "next/navigation";

export default function CreditCard() {
    const router = useRouter();
    const handleBack = () => {
        router.push("/payment/shipping");
    };
    return(
        <>
            <div className="creditcard-cont">
                <img src="../images/payment/creditCard.png" alt="credit-card-img"/>
            </div>
            <form className="payment-form">
                <label>
                    <input placeholder="Cardholder Name"/>
                </label>
                <label>
                    <input placeholder="Card Number"/>
                </label>
                <div className="exp-date-cont">
                    <label>
                        <input placeholder="Exp.Date"/>
                    </label>
                    <label>
                        <input placeholder="CVV"/>
                    </label>
                </div>
                {/* <label>
                    <input type="checkbox" />
                    Same as billing address
                </label> */}
            </form>
            <div className="back-next-btns payment-btns">
                <button className="back-btn" onClick={handleBack} >Back</button>
                <button className="next-btn">Pay</button>
            </div>
        </>
    )
}