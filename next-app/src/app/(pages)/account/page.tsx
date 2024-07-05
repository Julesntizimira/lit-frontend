"use client"
import Link from "next/link";
import {auth} from "@/auth";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { doGetSession } from "@/app/actions";
import { useRouter } from "next/navigation";


export default function Account () {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
         doGetSession()
         .then((data) => {
                if(!data) {
                    router.push("/login");
                } 
                else {
                    setUser(data);
                }
         })
    }, [])

    if(!user) {
        return null;
    }

    return (
        <div className="account-page-wrapper">
            <div className="account-menu active">
                <div className="account-munu-container">
                    <h3>Manage my account</h3>
                    <Link href="#">My Profile</Link>
                    <Link href="#">Address book</Link>
                    <Link href="#">My payment Options</Link>
                </div>
                <div className="account-munu-container">
                    <h3>My Orders</h3>
                    <Link href="#">My returns</Link>
                    <Link href="#">My Cancellations</Link>
                </div>
                <div className="account-munu-container">
                    <h3>My Wishlist</h3>
                </div>
            </div>
            <div className="account-right-container">
                <form className="profile-form">
                    <h3>Edit Your Profile</h3>
                    <div className="profile-form-inputs-cont">
                        <label>
                            First Name
                            <input 
                                id="profile-firstname"
                                placeholder={user?.firstname}
                                type="text"
                            />
                        </label>
                        <label>
                            Last Name
                            <input 
                                    id="profile-lastname"
                                    placeholder={user?.lastname}
                                    type="text"
                                />
                        </label>
                    </div>
                    <div className="profile-form-inputs-cont">
                        <label>
                            Email
                            <input 
                                id="profile-email"
                                type="email"
                                placeholder={user?.email}
                            />
                        </label>
                        <label>
                            Address
                            <input 
                                    id="profile-address"
                                    placeholder="Kingston, 5236, United State"
                                />
                        </label>
                    </div>
                    <div className="reset-password-inputs-cont">
                            <p>Password changes</p>
                            <input
                                placeholder="Current Password"
                                type="password"
                            />
                            <input
                                placeholder="New Password"
                                type="password"
                            />
                            <input
                                placeholder="Confirm Password"
                                type="password"
                            />
                    </div>
                    <div className="profile-form-btn">
                        <button className="reset-btn">Reset</button>
                        <button className="profile-change-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}