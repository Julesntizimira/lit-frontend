import { useEffect, useState } from "react";
import BrandContainer from "./brandContainer";


export default function ProductFilter (props) {
    const {title, items} = props.container;
    const [brandContentStyle, setBrandContentStyle] = useState({maxHeight: "0"})
    const [caretStyle, setCaretStyle ] = useState({
        transform: "rotate(0deg)"
    })

    useEffect (() => {
        setCaretStyle(prev => prev.transform === "rotate(0deg)" ? { transform: "rotate(180deg)"} : { transform: "rotate(0deg)" })
    }, [brandContentStyle])

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
                    />
                </div>
                <div className="brands">
                    {
                        items.map((item) => {
                            return (
                                <BrandContainer container={item} />  
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}