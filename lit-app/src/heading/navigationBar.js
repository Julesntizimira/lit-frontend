import { useState } from "react";
import {Link, NavLink} from "react-router-dom"

export default function NavigationBar () {
    const [menuDropdownStyle, setMenuDropDown] = useState("none");
    const navItems = [
        {
            category: "Fashion",
            subCategories: [
                "Men",
                "Women",
                "Kids",
                "Jewllery & Watches"
            ]
        },
        {
            category:"Electronics",
            subCategories: [
                "Computers & Accessories",
                "Mobile Phones & Accessories",
                "TV & Home Entertainment",
                "Cameras & Photography",
                "Audio Equipment",
                "Wearable Technology",
                "Home Appliances"
            ]
        },
        {
            category:"Health & Beauty",
            subCategories: [
                "Skincare",
                "Haircare",
                "Makeup",
                "Personal Care",
                "Health Devices",
                "Nutrition & Supplements",
            ]
        },
        {
            category: "Baby Products",
            subCategories: [
                "Baby Gear",
                "Baby Clothing",
                "Feeding",
                "Nursery"
            ]
        },
        {
            category: "Home & Kitchen",
            subCategories: [
                "Kitchen & Dining",
                "Furniture",
                "Bedding",
                "Home Decor",
                "Storage & Organization",
                "Home Improvement",
                "Garden and Outdoor"
            ]
        },
        {
            category: "Sports",
            subCategories: [
                "Exercise & Fitness",
                "Outdoor Recreation",
                "Sports Equipment",
                "Apparel & Footwear"
            ]
        },
        {
            category: "Books & Hobbies",
            subCategories: [
                "Books",
                "Musical Instruments",
                "Board Games & Puzzles",
                "Hobbies",
                "Crafts and Sewing"
            ]
        },
        {
            category: "Groceries",
            subCategories: [
                "Beverages",
                "Snacks",
                "Pantry Staples",
                "Gourmet Food"
            ]
        },
        {
            category: "Pets",
            subCategories: [
                "Dog Supplies",
                "Cat Supplies",
                "Fish & Aquatic",
                "Small Animals",
                "Bird Supplies"
            ]
        },
        {
            category: "Motors",
            subCategories: [
                "Automotive",
                "Motorcycles"
            ]
        },
        {
            category: "Real Estate",
            subCategories: [
                "Residential",
                "Commercial"
            ]
        }
    ]
    return (
        <nav>
            <ul className="nav-items">
                {navItems.map((item) => {
                    return(
                        <li>
                            <NavLink className="nav-link" to="">
                                {item.category}
                            </NavLink>

                            <ul className="nav-dropdown">
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
                            </ul>
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
                <p className="menu-dropdown-title">Categories</p>
                {
                    navItems.map((item) => {
                        return (
                            <li  onClick={() => {
                                setMenuDropDown(prev => prev === "none" ? "flex" : "none");
                            }}>
                                <Link to="/">{item.category}</Link>
                            </li>
                        )
                    })
                }
                 <li onClick={() => {
                        setMenuDropDown(prev => prev === "none" ? "flex" : "none");
                    }}>
                    <Link to="products">products</Link>
                </li>
            </ul>
        </nav>
    )
}