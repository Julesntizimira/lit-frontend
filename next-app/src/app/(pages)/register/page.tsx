"use client";

import { countryCode } from "@/components/utils";
import Link from "next/link";
import { useState } from "react";



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
                
                <form className="login-register-form">
                    <label htmlFor="firstname">
                            <input 
                                id="firstname"
                                type="text"
                                name="name"
                                placeholder="Firstname"
                                required
                            />
                    </label>
                    <label htmlFor="lastname">
                            <input 
                                id="lastname"
                                type="text"
                                name="name"
                                placeholder="Lastname"
                                required
                            />
                    </label>

                    <label htmlFor="email">
                        <input 
                            id="Email"
                            type="email"
                            name="name"
                            placeholder="Email"
                            required
                        />
                    </label>
                    <label htmlFor="phone">
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
                                                <li key={0}
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
                    </label>

                    <label htmlFor="password">
                        <input 
                                id="password"
                                type={passwordType}
                                name="password"
                                placeholder="Password"
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
                    </label>
                    <label htmlFor="confirm_password">
                            <input 
                                    id="confirm_password"
                                    type={passwordTypeConfirm}
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    required
                                />
                            <i className={`fa-regular ${confirmPasswordEye}`}
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
                    </label>
                    <button>Register</button>
                </form>
                <div className="login-btn-cont">
                   
                    {/* <Link to="">Forget password?</Link> */}
                </div>
                <p>or Create account Using</p>
                <div className="inter-socio-logo-wrapper">
                    <Link href="#" className="inter-socio-logo-cont">
                        <img src="images/login/googleIcon.png" alt=""/>
                    </Link>
                    <Link href="#" className="inter-socio-logo-cont">
                        <img src="images/login/facebookIcon.png" alt=""/>
                    </Link>
                    <Link href="#" className="inter-socio-logo-cont">
                        <img src="images/login/twitterIcon.png" alt=""/>
                    </Link>
                </div>
                <p className="signup-link">Already have an account? <Link href="/login">Login</Link></p>
               
            </div>
        </div>
    )
}