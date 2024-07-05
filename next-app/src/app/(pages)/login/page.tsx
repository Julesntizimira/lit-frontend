/* eslint-disable react/no-unescaped-entities */
"use client";

import axios from "axios";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { doSocialLogin, doCredentialLogin, doGetSession } from "@/app/actions";
import { auth } from "@/auth";



 export default function Login() {


    const router = useRouter();
    const [sessionChecked, setSessionChecked] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordEye, setPasswordEye] = useState("fa-eye");


    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    async function handleSocialLogin(event: React.MouseEvent<HTMLDivElement>) {
    
        const action  = event.currentTarget.getAttribute("data-action");
        const formData = new FormData();
        formData.append("action", action!);
        console.log(action)
        await doSocialLogin(formData);
    }



    async function handleLoginBtn(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if ((!emailError && !passwordError) && (user.email !== "") && (user.password !== "")) {
            try {
                const formData = new FormData();
                formData.append("email", user.email);
                formData.append("password", user.password);
                const response = await doCredentialLogin(formData);

            

                if (!response.error) {
                    router.push("/");
                } else {
                    if (response.error.includes("user not found")) {
                        setEmailError("User not found") 
                    } else if (response.error.includes("invalid password")) {
                        setPasswordError("Invalid Password")
                    }
                }
               
                // await axios.post("/api/users/login", user);
                // router.push("/");
            } catch (error: any) {
                // if(error.response.data && error.response.data.type === "email") {
                //     setEmailError("Email does not exist, Please try again");
                // } else if (error.response.data && error.response.data.type === "password") {
                //     setPasswordError("Incorrect Password");
                // }
                // console.log(error.message)
                // if(error.message === "invalid password") {
                //     setPasswordError(error.message)
                // }
                // if(error.message === "user not found") {
                //     setEmailError(error.message)
                // }
                // setPasswordError("Incorrect username or password.");
            
            }
        }
    }

    function formValidation() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(user.email !== "" && !emailRegex.test(user.email) ) {
            setEmailError("Invalid Email");
        } else{
            setEmailError(null);
        }
        setPasswordError(null);
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
           setSessionChecked(true);
        })
   }, [])

   if(!sessionChecked) {
       return null;
   }

    return (
        <div className="login-page-wrapper">
            <div className="login-img-cont">
                <img src="images/login/loginImage.png" alt=""/>
            </div>
            <div className="form-wrapper">
                <h1>Login</h1>
                
                <form className="login-register-form">
                    <label htmlFor="email">
                        <input 
                            id="email"
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
                    {passwordError && (<p className="error">{passwordError}</p>)}
                    <button
                     onClick={handleLoginBtn}
                     type="submit"
                     >
                        Login
                    </button>
                </form>
                <div className="login-btn-cont">
                    <Link href="#">Forget password?</Link>
                </div>
                <p>or Sign in Using</p>
                <div className="inter-socio-logo-wrapper">
                    <div className="inter-socio-logo-cont" data-action="google" onClick={handleSocialLogin} >
                        <img src="images/login/googleIcon.png" alt=""/>
                    </div>
                    <div className="inter-socio-logo-cont"  data-action="facebook" onClick={handleSocialLogin}>
                        <img src="images/login/facebookIcon.png" alt=""/>
                    </div>
                    <div className="inter-socio-logo-cont"  data-action="twitter" onClick={handleSocialLogin}>
                        <img src="images/login/twitterIcon.png" alt=""/>
                    </div>
                    <div className="inter-socio-logo-cont"  data-action="github" onClick={handleSocialLogin}>
                        <img src="images/login/githubIcon.png" alt=""/>
                    </div>
                </div>
                <p className="signup-link">Don't have an account? <Link href="/register">Sign Up</Link></p>
               
            </div>
        </div>
    )
}