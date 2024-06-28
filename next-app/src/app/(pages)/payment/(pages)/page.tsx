"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SelectAddress() {
    const router = useRouter();
    const handleNext = () => {
      router.push("payment/shipping");
    };
    const handleBack = () => {
        router.push("/cart");
    };
    return (
        <section className="select-address-section">
             <div className="steps inside">
                <Link href="#">
                    <div className="step-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="black"/>
                            <path d="M11.6953 4.5C10.945 4.50031 10.2022 4.64878 9.50951 4.93691C8.81679 5.22503 8.1878 5.64712 7.65864 6.17896C7.12948 6.7108 6.71056 7.34191 6.42594 8.03607C6.14131 8.73023 5.99658 9.47376 6.00006 10.224C6.00006 14.1792 10.0801 17.8056 11.3353 18.7656C11.4406 18.8526 11.573 18.9002 11.7097 18.9002C11.8463 18.9002 11.9787 18.8526 12.0841 18.7656C13.3417 17.7768 17.3881 14.1792 17.3881 10.224C17.3915 9.47397 17.2469 8.73063 16.9624 8.03662C16.6779 7.34262 16.2592 6.71162 15.7303 6.17981C15.2014 5.648 14.5727 5.22586 13.8803 4.9376C13.1878 4.64933 12.4453 4.50062 11.6953 4.5ZM11.6953 12.5904C11.2206 12.5904 10.7566 12.4496 10.3619 12.1859C9.96721 11.9222 9.6596 11.5474 9.47795 11.1088C9.2963 10.6703 9.24877 10.1877 9.34138 9.72218C9.43398 9.25663 9.66256 8.82899 9.9982 8.49334C10.3339 8.1577 10.7615 7.92912 11.227 7.83652C11.6926 7.74391 12.1752 7.79144 12.6137 7.97309C13.0522 8.15474 13.4271 8.46235 13.6908 8.85703C13.9545 9.25171 14.0953 9.71573 14.0953 10.1904C14.0953 10.8269 13.8424 11.4374 13.3923 11.8875C12.9422 12.3375 12.3318 12.5904 11.6953 12.5904Z" fill="white"/>
                        </svg>
                        <div className="step">
                            <p className="step-number">Step 1</p>
                            <p className="step-name">Address</p>
                        </div>
                    </div>
                </Link>
          
                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="1" viewBox="0 0 93 1" fill="none">
                    <line x1="0.333344" y1="0.75" x2="92.6667" y2="0.750008" stroke="url(#paint0_linear_385_5029)" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <defs>
                    <linearGradient id="paint0_linear_385_5029" x1="108.661" y1="0.999986" x2="-13.8438" y2="0.999979" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00551862" stopColor="#E6E6E6"/>
                    <stop offset="0.524616"/>
                    <stop offset="1" stopColor="#E6E6E6" stopOpacity="0.43"/>
                    </linearGradient>
                    </defs>
                </svg>
                <Link href="payment/shipping">
                    <div className="step-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="black"/>
                            <path d="M11.2778 16.6127C11.0212 16.3697 10.722 16.1829 10.3952 16.0665L9.71006 13.3986L17.8697 11.1159L18.7438 14.5224L11.2778 16.6127ZM8.68012 9.38794L14.1201 7.86638L14.9948 11.274L9.55537 12.7956L8.68012 9.38794ZM8.92425 16.0153C8.77237 16.0581 8.63119 16.1188 8.49394 16.1858L6.09544 6.83981H5.19319C5.10263 7.03725 4.91306 7.17619 4.68919 7.17619H3.56306C3.252 7.17619 3 6.91237 3 6.58781C3 6.26325 3.252 6 3.56306 6H4.68919C4.87819 6 5.03681 6.1035 5.13919 6.25144H6.87169V6.28012L6.89756 6.27225L9.37819 15.9377C9.22688 15.9517 9.07556 15.9737 8.92425 16.0153ZM9.06994 16.5834C10.1213 16.2893 11.2018 16.9406 11.4836 18.0392C11.7654 19.1366 11.1416 20.265 10.0898 20.5592C9.03844 20.8523 7.95787 20.2009 7.67606 19.1034C7.39425 18.006 8.01863 16.8776 9.06994 16.5834ZM8.7735 18.8351C8.89388 19.3054 9.35738 19.5844 9.80794 19.4578C10.2585 19.3312 10.5257 18.8481 10.4053 18.3778C10.2849 17.9076 9.82144 17.6286 9.37088 17.754C8.91975 17.8806 8.65256 18.3643 8.7735 18.8351ZM18.6735 16.5216L12.1012 18.3598C12.0894 18.2029 12.0675 18.0443 12.027 17.8862C11.9871 17.7281 11.9291 17.5796 11.8644 17.4367L18.4024 15.6086L18.6735 16.5216Z" fill="white"/>
                        </svg>
                        <div className="step">
                            <p className="step-number">Step 2</p>
                            <p className="step-name">Shipping</p>
                        </div>
                        <div className="step-overlayer"></div>
                    </div>
                </Link>
            </div>
            <h3>Select Address</h3>
            <div className="address-content">
                <input placeholder="Type your Address"/>
            </div>
            <div className="add-new-address">
                <div className="add-new-address-svgs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="548" height="1" viewBox="0 0 548 1" fill="none">
                        <line y1="0.75" x2="548" y2="0.75" stroke="url(#paint0_linear_615_2032)" strokeWidth="0.5" strokeDasharray="3 3"/>
                        <defs>
                        <linearGradient id="paint0_linear_615_2032" x1="555.117" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="#E6E6E6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{minWidth: "14px", cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z" fill="black"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="548" height="1" viewBox="0 0 548 1" fill="none">
                        <line x1="548" y1="0.25" y2="0.25" stroke="url(#paint0_linear_615_2038)" strokeWidth="0.5" strokeDasharray="3 3"/>
                        <defs>
                        <linearGradient id="paint0_linear_615_2038" x1="-7.1169" y1="0" x2="548" y2="0" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="#E6E6E6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p>Add new Address</p>
            </div>
            <div className="back-next-btns">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
        </section>
    )
}