import { useState } from "react";

export default function BrandContainer (props) {
    const {type, quantity} = props.container;
    const [checkbox, setcheckbox] = useState("fa-regular fa-square")
    
    return (
        <div className="brand-container"
        onClick={ () => {
            setcheckbox(prev => prev === "fa-solid fa-square-check" ? "fa-regular fa-square" : "fa-solid fa-square-check")
        }}
        >
            <i className={checkbox}></i>
            <p>{type}</p>
            <span>{quantity}</span>
        </div>
    )
}