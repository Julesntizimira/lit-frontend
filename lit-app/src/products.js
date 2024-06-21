import { useState } from "react";
import Card from "./card";
import Footer from "./footer";
import Path from "./path";
import ProductFilter from "./productFilter";
import { cards } from "./utils";
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


    return (
        <>
            <Path container={{path: [
                "Catalog",
                "Smartphones"
            ]}}/>
            <div className="product-page-wrapper">
                <div className="side-bar">
                    <section className="filter">
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

                </div>
                <div className="right-container">
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
            <Footer />
        </>
    )
}