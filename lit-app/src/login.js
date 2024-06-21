import { Link } from "react-router-dom";
import Footer from "./footer";
import PromotionAdd from "./heading/promotionAdd";
import { useState } from "react";

export default function Login() {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordEye, setPasswordEye] = useState("fa-eye");

    return (
        <>
        <PromotionAdd />
        <div className="login-page-wrapper">
            <div className="login-img-cont">
                <img src="images/login/loginImage.png" alt=""/>
            </div>
            <div className="form-wrapper">
                <h1>Login</h1>
                
                <form>
                    <label htmlFor="email"> Email
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                        <input 
                            id="email"
                            type="email"
                            name="name"
                            placeholder="Type your email"
                            required
                        />
                    </div>
                     
                    </label>
                    <label htmlFor="password"> Password
                        <div>
                            <i className="fa-solid fa-lock"></i>
                            <input 
                                    id="password"
                                    type={passwordType}
                                    name="password"
                                    placeholder="Type your password"
                                    required
                            />
                            <i className={`fa-regular ${passwordEye}`}
                                onClick={() => {
                                    setPasswordType((prev) => {
                                        return prev === "password" ? "text" : "password"
                                    })
                                    setPasswordEye((prev) => {
                                        return prev === "fa-eye" ? "fa-eye-slash" : "fa-eye"
                                    })
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                            ></i>
                        </div>
                    </label>
                    <button>Login</button>
                </form>
                <div className="login-btn-cont">
                    
                    <Link to="">Forget password?</Link>
                </div>
                <p>or Sign in Using</p>
                <div className="inter-socio-logo-wrapper">
                    <Link to="" className="inter-socio-logo-cont">
                        <img src="images/login/googleIcon.png" alt=""/>
                    </Link>
                    <Link to="" className="inter-socio-logo-cont">
                        <img src="images/login/facebookIcon.png" alt=""/>
                    </Link>
                    <Link to="" className="inter-socio-logo-cont">
                        <img src="images/login/twitterIcon.png" alt=""/>
                    </Link>
                </div>
                <p className="signup-link">Don't have an account? <Link to="/register">Sign Up</Link></p>
               
            </div>
        </div>
        <Footer />
        </>
    )
}