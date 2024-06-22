import { NavLink, useNavigate } from "react-router-dom";

export default function Shipping() {
    const navigate = useNavigate();
    const handleNext = () => {
      navigate("/payment/payment");
    };
    const handleBack = () => {
        navigate("/payment");
    };
    return (
        <section className="select-address-section">
              <div className="steps inside">
                <NavLink className={({isActive}) => isActive ? "active" : null} end to="">
                    <div className="step-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="black"/>
                            <path d="M11.2778 16.6127C11.0212 16.3697 10.722 16.1829 10.3952 16.0665L9.71006 13.3986L17.8697 11.1159L18.7438 14.5224L11.2778 16.6127ZM8.68012 9.38794L14.1201 7.86638L14.9948 11.274L9.55537 12.7956L8.68012 9.38794ZM8.92425 16.0153C8.77237 16.0581 8.63119 16.1188 8.49394 16.1858L6.09544 6.83981H5.19319C5.10263 7.03725 4.91306 7.17619 4.68919 7.17619H3.56306C3.252 7.17619 3 6.91237 3 6.58781C3 6.26325 3.252 6 3.56306 6H4.68919C4.87819 6 5.03681 6.1035 5.13919 6.25144H6.87169V6.28012L6.89756 6.27225L9.37819 15.9377C9.22688 15.9517 9.07556 15.9737 8.92425 16.0153ZM9.06994 16.5834C10.1213 16.2893 11.2018 16.9406 11.4836 18.0392C11.7654 19.1366 11.1416 20.265 10.0898 20.5592C9.03844 20.8523 7.95787 20.2009 7.67606 19.1034C7.39425 18.006 8.01863 16.8776 9.06994 16.5834ZM8.7735 18.8351C8.89388 19.3054 9.35738 19.5844 9.80794 19.4578C10.2585 19.3312 10.5257 18.8481 10.4053 18.3778C10.2849 17.9076 9.82144 17.6286 9.37088 17.754C8.91975 17.8806 8.65256 18.3643 8.7735 18.8351ZM18.6735 16.5216L12.1012 18.3598C12.0894 18.2029 12.0675 18.0443 12.027 17.8862C11.9871 17.7281 11.9291 17.5796 11.8644 17.4367L18.4024 15.6086L18.6735 16.5216Z" fill="white"/>
                        </svg>
                        <div className="step">
                            <p className="step-number">Step 2</p>
                            <p className="step-name">Shipping</p>
                        </div>
                    </div>
                </NavLink>

                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="1" viewBox="0 0 93 1" fill="none">
                    <line x1="0.333344" y1="0.75" x2="92.6667" y2="0.750008" stroke="url(#paint0_linear_385_5029)" stroke-width="0.5" stroke-dasharray="3 3"/>
                    <defs>
                    <linearGradient id="paint0_linear_385_5029" x1="108.661" y1="0.999986" x2="-13.8438" y2="0.999979" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00551862" stop-color="#E6E6E6"/>
                    <stop offset="0.524616"/>
                    <stop offset="1" stop-color="#E6E6E6" stop-opacity="0.43"/>
                    </linearGradient>
                    </defs>
                </svg>
              
                <NavLink className={({isActive}) => isActive ? "active" : null} end to="/payment/payment">
                    <div className="step-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="black"/>
                            <path d="M17.2229 13.9801C17.0473 13.8418 15.4969 12.1345 14.6189 11.3387C14.6152 11.335 14.6152 11.335 14.6152 11.3313V7.65504C14.6152 6.74346 13.8717 6 12.9601 6H7.53923C6.69116 6 6 6.69489 6 7.53923V16.1619C6 17.0735 6.74346 17.8169 7.65504 17.8169H9.23163H9.63138C9.69863 17.8169 9.75467 17.7572 9.7472 17.6899L9.66127 16.9577C9.6538 16.8979 9.60523 16.8568 9.54545 16.8568H9.39975H9.31009C9.24658 16.8568 9.19427 16.8045 9.19427 16.741V6.94521C9.19427 6.88169 9.24658 6.82939 9.31009 6.82939H12.9714C13.3412 6.82939 13.6438 7.132 13.6438 7.50187V15.5044V16.2927C13.6438 16.5467 13.4682 16.7634 13.2329 16.8306C13.2291 16.8306 13.2291 16.8306 13.2254 16.8306C12.8257 16.6139 12.3549 15.6874 12.2839 15.5417C12.2765 15.5305 12.2727 15.5156 12.2727 15.5044C12.2466 15.269 11.9813 12.99 10.7671 12.99C10.7335 12.99 10.6999 12.99 10.6663 12.9938C10.6663 12.9938 9.69489 13.076 10.4981 15.8443C10.4981 15.8518 10.5019 15.8555 10.5019 15.863L10.8568 18.9303C10.8568 18.934 10.8568 18.9377 10.8605 18.9452C10.8904 19.061 11.2939 20.6264 12.3362 21.736C12.3549 21.7584 12.3661 21.7846 12.3661 21.8144V22.0797C12.3661 22.0872 12.3624 22.0909 12.3549 22.0909H12.2615C12.0336 22.0909 11.8468 22.2777 11.8468 22.5056V23.5853C11.8468 23.8132 12.0336 24 12.2615 24H16.6588C16.8867 24 17.0735 23.8132 17.0735 23.5853V22.5131C17.0735 22.2852 16.8867 22.0984 16.6588 22.0984C16.6513 22.0984 16.6476 22.0946 16.6476 22.0872C16.7933 20.7347 17.3163 16.1096 17.5965 15.7472C17.604 15.736 17.6115 15.7248 17.6152 15.7098C17.6638 15.5417 17.9066 14.5143 17.2229 13.9801ZM7.72976 16.7484C7.72976 16.8082 7.6812 16.8531 7.62516 16.8531C7.25903 16.8531 6.96015 16.5542 6.96015 16.188V7.4944C6.96015 7.12827 7.25903 6.82939 7.62516 6.82939C7.68493 6.82939 7.72976 6.87796 7.72976 6.934V16.7484Z" fill="white"/>
                        </svg>
                        <div className="step">
                            <p className="step-number">Step 3</p>
                            <p className="step-name">Payment</p>
                        </div>
                        <div className="step-overlayer"></div>
                    </div>
                   
                </NavLink>
           
            </div>
            <h3>Shipping Method</h3>
            <div className="address-content">
                <form className="shipping-methods">
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free" />
                            <span className="shipping-type">Free</span>
                            <span>Regular Shipment</span>
                        </div>
                        <p className="shipping-date">17 Oct, 2024</p>
                    </label>
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free"/>
                            <span className="shipping-type">$8.50</span>
                            <span>Get your delivery as soon as possible</span>
                        </div>
                        <p className="shipping-date">1 Oct, 2024</p>
                    </label>
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free"/>
                            <span className="shipping-type">Schedule</span>
                            <span>Pick a date when you want to get your delivery</span>
                        </div>
                        <p className="shipping-date">Select Date</p>
                    </label>
                </form>
            </div>
            <div className="back-next-btns">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
        </section>
    )
}