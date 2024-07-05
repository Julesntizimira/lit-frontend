"use client";

import { useState } from "react";
import Link from "next/link";


export default function Card (props: any) {
    const { price, name, image_url } = props.container
    const [fillColor, setFillColor] = useState("none");
    const [strokeColor, setStrokeColor] = useState("#191919");
    return (
        <div className="card-container">
            <div className="wish-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" fill={fillColor}
                onClick={() => {
                    setFillColor(prev => prev === "none" ? "red" : "none");
                    setStrokeColor(prev => prev === "none" ? "#191919" : "none")
                }}
                >
                    <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="card-img-cont">
                <img src={image_url} alt="product-thumbnail"/>
            </div>
            <Link href="/product" className="card-description">
                <p>{name}</p>
                {/* <p>{type}</p> */}
            </Link>
            <div className="card-price-btn-container">
                <p className="card-price">${price}</p>
                <button>Buy now</button>
            </div>
        </div>
    )
}