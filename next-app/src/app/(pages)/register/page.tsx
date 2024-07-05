"use client";

import { countryCode } from "@/components/utils";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doGetSession } from "@/app/actions";




export default function Register() {
    // const session = await auth();
    // const loggedInUser = session?.user;
    // if (loggedInUser){
    //     redirect("/");
    // }


    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
    const [passwordEye, setPasswordEye] = useState("fa-eye");
    const [confirmPasswordEye, setConfirmPasswordEye] = useState("fa-eye");
    const [currentCountry, setCurrentCountry] = useState(countryCode[0])
    const [countryListStyle, setCountryListStyle] = useState< string | null>(null);
    const router = useRouter() 



    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        country: ""
    })

    const [emailError, setEmailError] = useState<string | null>(null)
    const [passwordError, setPasswordError] = useState<string | null>(null)
    const [phoneError, setPhoneError] = useState<string | null>(null)


    async function handleRegisterBtn(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if ((!emailError && !passwordError && !phoneError) &&
            (user.firstname !== "") && 
            (user.lastname !== "") && 
            (user.email !== "") &&
            (user.password !== "") &&
            (user.confirmPassword !== "")) {
            try {
                user.phoneNumber = currentCountry.dial_code + user.phone
                user.country = currentCountry.name
                await axios.post("/api/users/signup", user);
                router.push("/login");
                 
            } catch (error: any) {
                if(error.response?.status) {
                    setEmailError("User with same email already exists, Please try again");
                }
                console.log(error.message)
            }
        }
    }

    function formValidation() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (user.password !== "" && user.confirmPassword !== "" && user.password !== user.confirmPassword) {
            console.log(user.password)
            console.log(user.confirmPassword)
            setPasswordError("Password confirmation doesn't match Please try again")
        } else{
            setPasswordError(null)
        }
        if(user.email !== "" && !emailRegex.test(user.email) ) {
            setEmailError("Invalid Email");
        } else{
            setEmailError(null);
        }
        if (user.phone !== "" && user.phone.length != 9){
            setPhoneError("Incomplete phone numbers")
        } else {
            setPhoneError(null)
        }
    }

    useEffect ( ()=> {
        formValidation();
    }, [user])

     // route protection
     useEffect(() => {
        doGetSession()
        .then((data) => {
           if(data) {
               router.push("/");
           } 
        })
   }, [])

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
                                value={user.firstname}
                                onChange={(e) => {
                                    setUser({...user, firstname: e.target.value});
                                }}
                                required
                            />
                    </label>
                    <label htmlFor="lastname">
                            <input 
                                id="lastname"
                                type="text"
                                name="name"
                                placeholder="Lastname"
                                value={user.lastname}
                                onChange={(e) => {
                                    setUser({...user, lastname: e.target.value});
                                }}
                                required
                            />
                    </label>

                    <label htmlFor="email">
                        <input 
                            id="Email"
                            type="email"
                            name="name"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) => {
                                setUser({...user, email: e.target.value});
                            }}
                            required
                        />
                    </label>
                    {emailError && (<p className="error">{emailError}</p>)}
                    <label htmlFor="phone">
                            <div 
                                className="countryCode"
                                onClick={ (e) => {
                                    e.stopPropagation();
                                    setCountryListStyle(prev => prev === null ? "active" : null)
                                }}
                             
                            >
                                <p className="current-country">
                                    {currentCountry.flag} 
                                    <span>
                                        {currentCountry.dial_code}
                                    </span>
                                </p>
                                <ul className={`country-list ${countryListStyle}`}>
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
                                maxLength={9}
                                value={user.phone}
                                onChange={(e) => {
                                    setUser({...user, phone: e.target.value});
                                }}
                                required
                            />
                    </label>
                    {phoneError && (<p className="error">{phoneError}</p>)}

                    <label htmlFor="password">
                        <input 
                                id="password"
                                type={passwordType}
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => {
                                    setUser({...user, password: e.target.value});
                                }}
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
                                    value={user.confirmPassword}
                                    onChange={(e) => {
                                        setUser({...user, confirmPassword: e.target.value});
                                    }}
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
                    {passwordError && (<p className="error">{passwordError}</p>)}
                    <button 
                    onClick={handleRegisterBtn}
                    type="submit"
                    >Register</button>
                    
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