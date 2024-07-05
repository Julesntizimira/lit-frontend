"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavigationBar () {
    const key = 0
    const navBarItems = [
        {
            item: "Home",
            link: "/"
        },
        {
            item: "About",
            link: ""
        },
        {
            item:  "Sell",
            link: ""
        },
        {
            item:  "Help & Contact",
            link: "/contact"
        },
        {
            item:  "Money Back Guarnty",
            link: ""
        }
       
    ]
    const [menuDropdownStyle, setMenuDropDown] = useState<string | null>(null);

    const dropdownRef = useRef<SVGSVGElement>(null);
    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setMenuDropDown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);



    return (
        <nav>
            <ul className="nav-items">
                {
                navBarItems.map((item) => {
                    return(
                        <li key={key}>
                            <Link className="nav-link" href={item.link}>
                                {item.item}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
            <svg ref={dropdownRef}
                onClick={() => {
                    setMenuDropDown(prev => prev === "active" ? null : "active");
                }}
                 xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M32.5 13.75H7.5V11.25H32.5V13.75Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.5 21.25H7.5V18.75H32.5V21.25Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.5 28.75H7.5V26.25H32.5V28.75Z" fill="black"
            />
            </svg>
            <ul className={`menu-dropdown ${menuDropdownStyle}`}>

                <p className="menu-dropdown-title">Menu</p>
                {
                    navBarItems.map((item) => {
                        return (
                            <li key={key} onClick={() => {
                                setMenuDropDown(null);
                            }}>
                                <Link href={item.link}>{item.item}</Link>
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