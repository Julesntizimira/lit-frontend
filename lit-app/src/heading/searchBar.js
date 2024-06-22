import { Link } from "react-router-dom";

export default function SearchBar() {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                {/* <div className="logo-cont">
                    <img src="./images/logos/ebay.png" alt="company-logo"/>
                </div> */}
                {/* <div className="category-filter">
                    <span>Shop by category</span>
                    <i class="fa-solid fa-angle-down"></i>
                </div> */}
                <div className="search-input-cont">
                    <div className="search-icon-cont one">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input 
                        placeholder="Search for anything"
                        type="text"
                    />
                    <div className="search-icon-cont two">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    {/* <div className="category-filter-input">
                        <span>All Categories</span>
                        <i class="fa-solid fa-angle-down"></i>
                    </div> */}
                    <button className="search-btn">Search</button>
                </div>
                <div className="personalized">
                    <Link className="home-login-link" to="login">
                        <span>Login/SignUp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                            <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                    <Link className="notification-bell" to="">
                        <i className="fa-regular fa-bell"></i>
                    </Link>
                    <Link className="cart-icon" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                        <path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}