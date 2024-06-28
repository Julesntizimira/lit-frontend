"use client";

import { useState } from "react";

export default function BrandContainer (props: any) {
    const {type, quantity} = props.container;

    const unchecked = {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                    <rect x="0.25" y="0.416687" width="15.8333" height="15.1667" rx="2.75" stroke="#D3D3D3" strokeWidth="0.5"/>
                </svg>),
        name: "unchecked"
    }
    const checked = {   
        svg:  ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                    <rect y="0.166656" width="16.3333" height="15.6667" rx="3" fill="black"/>
                    <path d="M5.99992 8.83332L6.56634 9.25814C6.99503 9.57966 7.60097 9.50611 7.9403 9.09138L10.3333 6.16666" stroke="white" strokeLinecap="round"/>
                </svg> ),
        name: "checked"
    }
    const [checkbox, setcheckbox] = useState(unchecked)
    
    return (
        <div className="brand-container"
        onClick={ () => {
            setcheckbox(prev => prev.name === "checked" ? unchecked : checked)
        }}
        >
            {checkbox.svg}
            <p>{type}</p>
            <span>{quantity}</span>
        </div>
    )
}