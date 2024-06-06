import {NavLink} from "react-router-dom"
export default function NavigationBar () {
    const navItems = [
        "Saved",
        "Electronics", 
        "Electronics", 
        "Motors", 
        "Fashion", 
        "Collectibles and Art",
        "Sports",
        "Health & Beauty",
        "Industrial equipment",
        "Home & Garden",
        "Deals",
        "Sell"
    ]
    return (
        <nav>
            <ul className="nav-items">
                {navItems.map((item) => {
                    return(
                        <li>
                            <NavLink className="nav-link" to="">
                                {item}
                            </NavLink>
                        </li>
                    )
                })
                }
            </ul>   
        </nav>
    )
}