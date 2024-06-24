import { useState } from "react";
import {Link, NavLink} from "react-router-dom"

export default function NavigationBar () {
    const navBarItems = [
        "Home",
        "About",
        "Sell",
        "Help & Contact",
        "Money Back Guarnty"
    ]
    const [menuDropdownStyle, setMenuDropDown] = useState("none");

    return (
        <nav>
            <ul className="nav-items">
                {navBarItems.map((item) => {
                    return(
                        <li>
                            <NavLink className="nav-link" to="">
                                {item}
                            </NavLink>

                            {/* <ul className="nav-dropdown">
                                <p className="nav-dropdown-title">{item.category}</p>
                                {
                                    item.subCategories.map((subCategory) => {
                                        return (
                                            <li>
                                                <Link to="">{subCategory}</Link>
                                            </li>
                                        )
                                    })
                                    
                                }
                            </ul> */}
                        </li>
                    )
                })
                }
            </ul>
            <svg
                onClick={() => {
                    setMenuDropDown(prev => prev === "none" ? "flex" : "none");
                }}
                 xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 13.75H7.5V11.25H32.5V13.75Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 21.25H7.5V18.75H32.5V21.25Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 28.75H7.5V26.25H32.5V28.75Z" fill="black"
            />
            </svg>
            <ul className="menu-dropdown" style={{
                display: menuDropdownStyle
            }}>
                <p className="menu-dropdown-title">Menu</p>
                {
                    navBarItems.map((item) => {
                        return (
                            <li  onClick={() => {
                                setMenuDropDown(prev => prev === "none" ? "flex" : "none");
                            }}>
                                <Link to="/">{item}</Link>
                            </li>
                        )
                    })
                }
                 {/* <li onClick={() => {
                        setMenuDropDown(prev => prev === "none" ? "flex" : "none");
                    }}>
                    <Link to="products">products</Link>
                </li> */}
            </ul>
        </nav>
    )
}