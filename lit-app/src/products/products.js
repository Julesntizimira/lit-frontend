import { useState } from "react";
import Card from "../card";
import Path from "./path";
import ProductFilter from "./productFilter";
import { cards } from "../utils";
import Pagination from "./pagination";

export default function Products () {
    const productFilters = [
        {
            title: "Brand",
            items: [
                {
                    type: "Apple",
                    quantity: "110"
                },
                {
                    type: "Samsung",
                    quantity: "125"
                },
                {
                    type: "Xiaomi",
                    quantity: "68"
                },
                {
                    type: "Poco",
                    quantity: "44"
                },
                {
                    type: "OPPO",
                    quantity: "35"
                },
                {
                    type: "Honor",
                    quantity: "10"
                },
                {
                    type: "Motorola",
                    quantity: "34"
                },
                {
                    type: "Nokia",
                    quantity: "22"
                },
                {
                    type: "Realme",
                    quantity: "35"
                },
            ]
        },
        {
            title: "Protection class",
            items: [
                {
                    type: "16GB",
                    quantity: "110"
                },
                {
                    type: "32GB",
                    quantity: "125"
                },
                {
                    type: "64GB",
                    quantity: "68"
                },
                {
                    type: "128GB",
                    quantity: "44"
                },
                {
                    type: "258GB",
                    quantity: "35"
                },
                {
                    type: "512GB",
                    quantity: "10"
                },
            ]
        }
    ]
    const [currentPage, setCurrentPage] = useState(1);
    // const [perPage, setPerPage] = useState(9);
    const perPage = 9;

    const endIndex = currentPage * perPage;
    const startIndex = endIndex - perPage;
    const totalPosts = cards.length;
    const pageData = cards.slice(startIndex, endIndex);

    const [sidebarVisible, setSideBarVisible] = useState("");
  

    return (
        <>
            <Path container={{path: [
                "Catalog",
                "Smartphones"
            ]}}/>
            <div className="product-page-wrapper">
                <div className= {`side-bar ${sidebarVisible}`}>
                    <section className="filter">
                        {/* <p>
                            Filters
                        </p> */}
                        <h3 className="side-bar-section-title">
                            Price
                            <i className="fa-solid fa-angle-up"></i>
                        </h3>
                        <div className="price-filter-cont">
                            <div className="from-to">
                                <span>From</span>
                                <span>To</span>
                            </div>
                            <div className="price-interval">
                                <label htmlFor="from">
                                    <input 
                                        id="from"
                                        placeholder="1299"
                                        type="number"
                                    />
                                </label>
                                <label htmlFor="to">
                                   
                                    <input 
                                        id="to"
                                        placeholder="1299"
                                        type="number"
                                    />
                                </label>
                            </div>
                        </div>
                    </section>
                    {
                        productFilters.map((filter) => {
                            return(
                                <ProductFilter container={filter}/>
                            )
                        })
                    }
                    <section className="filter screen-diagonal-section">
                         <h3 className="side-bar-section-title">
                            Screen diagonal
                            <i className="fa-solid fa-angle-up"></i>
                        </h3>
                    </section>
                     <section className="filter screen-type">
                         <h3 className="side-bar-section-title">
                            Screen type
                            <i className="fa-solid fa-angle-up"></i>
                        </h3>
                    </section>
                     <section className="filter battery-capacity">
                         <h3 className="side-bar-section-title">
                            Battery capacity
                            <i className="fa-solid fa-angle-up"></i>
                        </h3>
                    </section>
                    <button className="apply-btn" onClick={() => {
                        setSideBarVisible(prev => prev === "" ? "visible" : "");
                    }}>Apply</button>
                </div>

                <div className={`right-container ${sidebarVisible === "visible" ? "invisible" : ""}`}>
                    <div className="top-part-filter-rating">
                        <div className="left-side-to-filter" onClick={() => {
                            setSideBarVisible(prev => prev === "" ? "visible" : "");
                        }}>
                            <span>Filters</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M20 19H14M14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19M10 19H4M20 12L8 12M8 12C8 10.8954 7.1046 10 6 10C4.8954 10 4 10.8954 4 12C4 13.1046 4.8954 14 6 14C7.1046 14 8 13.1046 8 12ZM16 5L4 5M16 5C16 6.1046 16.8954 7 18 7C19.1046 7 20 6.1046 20 5C20 3.8954 19.1046 3 18 3C16.8954 3 16 3.8954 16 5Z" stroke="black" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className="right-side-to-rating">
                            <span>By rating</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className="top-part">
                        <div className="left-side">
                            <p>selected products: <span>{totalPosts}</span></p>
                        </div>
                        <div className="right-side">
                            <p>By rating</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className="products">
                        {
                            pageData.map((card) => {
                                return(
                                    <Card container={card}/>
                                )
                            })
                        }
                    </div>
                    <Pagination container={{totalPosts, perPage, setCurrentPage, currentPage}}/>
                </div>
            </div>
        </>
    )
}