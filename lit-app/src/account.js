import { NavLink } from "react-router-dom";

export default function Account() {
    return (
        <div className="account-page-wrapper">
            <div className="account-menu active">
                <div className="account-munu-container">
                    <h3>Manage my account</h3>
                    <NavLink>My Profile</NavLink>
                    <NavLink>Address book</NavLink>
                    <NavLink>My payment Options</NavLink>
                </div>
                <div className="account-munu-container">
                    <h3>My Orders</h3>
                    <NavLink>My returns</NavLink>
                    <NavLink>My Cancellations</NavLink>
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
                                placeholder="Md"
                            />
                        </label>
                        <label>
                            Last Name
                            <input 
                                    id="profile-lastname"
                                    placeholder="Rimel"
                                />
                        </label>
                    </div>
                    <div className="profile-form-inputs-cont">
                        <label>
                            Email
                            <input 
                                id="profile-email"
                                placeholder="rimel1111@gmail.com"
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
                            />
                            <input
                                placeholder="New Password"
                            />
                            <input
                                placeholder="Confirm Password"
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