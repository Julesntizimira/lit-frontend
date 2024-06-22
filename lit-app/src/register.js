import { Link } from "react-router-dom";
import { useState } from "react";
import { countryCode } from "./utils";


export default function Register() {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
    const [passwordEye, setPasswordEye] = useState("fa-eye");
    const [confirmPasswordEye, setConfirmPasswordEye] = useState("fa-eye");
    const [currentCountry, setCurrentCountry] = useState(countryCode[0])
    const [countryListStyle, setCountryListStyle] = useState({
        display: "none"
    })


  
    return (
   
        <div className="login-page-wrapper">
            <div className="login-img-cont">
                <img src="images/login/loginImage.png" alt=""/>
            </div>
            <div className="form-wrapper">
                <h1>Sign Up</h1>
                
                <form>
                    <label htmlFor="firstname"> Firstname
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <input 
                                id="firstname"
                                type="text"
                                name="name"
                                placeholder="Type your firstname"
                                required
                            />

                        </div>
                    </label>
                    <label htmlFor="lastname"> Lastname
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <input 
                                id="lastname"
                                type="text"
                                name="name"
                                placeholder="Type your lastname"
                                required
                            />
                        </div>
                    </label>

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
                    <label htmlFor="phone"> Telphone
                        <div>
                            <div 
                                className="countryCode"
                                onClick={ () => {
                                    setCountryListStyle(prev => 
                                        prev.display === "none" ? {display: "block"} : {display: "none"}
                                    )
                                }}
                             
                            >
                                <p className="current-country">
                                    {currentCountry.flag} 
                                    <span>
                                        {currentCountry.dial_code}
                                    </span>
                                </p>
                                <ul className="country-list"
                                   style={countryListStyle}>
                                    {
                                        countryCode.map((country) => {
                                            return (
                                                <li
                                                    onClick={() => {
                                                        setCurrentCountry(country)
                                                    }}
                                                >
                                                    <span className="country-code-name">{country.code}</span>
                                                    <span className="country-flag">{country.flag}</span>
                                                    <span className="country-dial-code">{country.dial_code}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <input 
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="787 354 546"
                                required
                            />
                        </div>
                    </label>

                    <label htmlFor="password"> Password
                        <div>
                            <i class="fa-solid fa-lock"></i>
                            <input 
                                    id="password"
                                    type={passwordType}
                                    name="password"
                                    placeholder="Type your password"
                                    required
                            />
                            <i class={`fa-regular ${passwordEye}`}
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
                    <label htmlFor="confirm_password"> Confirm Password
                        <div>
                            <i class="fa-solid fa-lock"></i>
                            <input 
                                    id="confirm_password"
                                    type={passwordTypeConfirm}
                                    name="confirm_password"
                                    placeholder="Type your password"
                                    required
                                />
                            <i class={`fa-regular ${confirmPasswordEye}`}
                               onClick={() => {
                                    setPasswordTypeConfirm((prev) => {
                                        return prev === "password" ? "text" : "password"
                                    })
                                    setConfirmPasswordEye((prev) => {
                                        return prev === "fa-eye" ? "fa-eye-slash" : "fa-eye"
                                    })
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                            ></i>
                        </div>
                    </label>
                    <button>Register</button>
                </form>
                <div className="login-btn-cont">
                   
                    {/* <Link to="">Forget password?</Link> */}
                </div>
                <p>or Create account Using</p>
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
                <p className="signup-link">Already have an account? <Link to="/login">Login</Link></p>
               
            </div>
        </div>
    )
}