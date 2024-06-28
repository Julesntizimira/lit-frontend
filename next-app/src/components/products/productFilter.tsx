"use client";

import { useEffect, useState } from "react";
import BrandContainer from "./brandContainer";


export default function ProductFilter (props: any) {
    const {title, items} = props.container;
    const [brandContentStyle, setBrandContentStyle] = useState({maxHeight: "0"})
    const [caretStyle, setCaretStyle ] = useState({
        transform: "rotate(0deg)"
    })
    const [displayItems, setDisplayItems] = useState(items);

    useEffect (() => {
        setCaretStyle(prev => prev.transform === "rotate(0deg)" ? { transform: "rotate(180deg)"} : { transform: "rotate(0deg)" })
    }, [brandContentStyle])

    function handleInputChange (event: any) {
        const value = event.target.value;
        const newItems = [];
        for(let item of items) {
            if(item.type.toLowerCase().includes(value.toLowerCase())) {
                newItems.push(item)
            } 
        }
        setDisplayItems(newItems)
    }

    const key = 0;
    return (      
        <section className="filter">
            <h3 className="side-bar-section-title"
                onClick={() => {
                    setBrandContentStyle(prev => prev.maxHeight === "0" ? {maxHeight: "300px"} : {maxHeight: "0"})
                }}
            >
                {title}
                <i className="fa-solid fa-angle-up" style={caretStyle}></i>
            </h3>
            <div className="brand-content"
                style={brandContentStyle}
            >
                <div className="brand-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input 
                        placeholder="Search"
                        className="category-search"
                        type="text"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="brands">
                    {
                        displayItems.map((item: any) => {
                            return (
                                <BrandContainer key={key} container={item} />  
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}