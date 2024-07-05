"use client"

import AddSection from "@/components/home/addSection"
import Card from "@/components/home/card";
import CategoryContainer from "@/components/home/categoryContainer"
import { addOne, addtwo } from "@/components/utils"
import { useEffect, useState } from "react";
import customFetch from "@/helpers/customFetch";
import { doGetSession } from "../actions";
import { useRouter } from "next/navigation";


export default function HomePage () {
    const router = useRouter()
    const key = 0;

    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {

        customFetch("api/categories", "failed to fetch categories", setCategories);
        customFetch("api/cards", "failed to fetch cards", setCards);
    }, [])



    // const dbPopulate = async () => {
    //     try {
    //         const response = await axios.get("api/populate");
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log("client failed to populate database" + error);
    //     }
    // }
    
    return (
        <>
            <AddSection container={addOne}/>
            <section className="categories-section">
                <div className="categories-section-container">
                    <h2>Explore Popular Categories</h2>
            
                    <div className="categories-wrapper">
                    {
                        categories.map((category: any) => {
                            return(
                                <CategoryContainer key={key} img={category.image_url} categoryName={category.name} />
                            )
                        })
                    }
                    </div>
                </div>
            </section>
            <section className="categories-section">
                <div className="categories-section-container">
                    <h2>Best Selling Products</h2>
            
                    <div className="categories-wrapper">
                        {
                            cards.map((card) => {
                                return(
                                    <Card key={key} container={card}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <AddSection container={addtwo} />
            
            <section className="security">
                <div className="security-section-wrapper">
                    <div className="security-container">
                        <div className="security-icon-cont">
                            <img src="images/security/delivery.png" alt="icon"/>
                        </div>
                        <div className="security-content">
                            <h3>FREE AND FAST DELIVERY</h3>
                            <p>Free deleivery for all orders over $140</p>
                        </div>
                    
                    </div>
                    <div className="security-container">
                        <div className="security-icon-cont">
                            <img src="images/security/support.png" alt="icon"/>
                        </div>
                        <div className="security-content">
                            <h3>24/7 CUSTOMER SERVICES</h3>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                    
                    </div>
                    <div className="security-container">
                        <div className="security-icon-cont">
                            <img src="images/security/secure.png" alt="icon"/>
                        </div>
                        <div className="security-content">
                            <h3>MONEY BACK GUARANTY</h3>
                            <p>We return money within 30 days</p>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <script async data-id="8717655548" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script> */}
            {/* <button onClick={dbPopulate}>database populate</button> */}
        </>
    )
}