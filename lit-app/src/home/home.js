import AddSection from "./addSection";
import CategoryContainer from "./categoryContainer";
import Card from "./card";
import { addOne, addtwo, cards, categories } from "../utils";

export default function Home () {
    return (
        <>
            <AddSection container={addOne}/>
            <section className="categories-section">
                <div className="categories-section-container">
                    <h2>Explore Popular Categories</h2>
            
                    <div className="categories-wrapper">
                    {
                        categories.map((category) => {
                            return(
                                <CategoryContainer img={category.image_url} categoryName={category.categoryName} />
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
                                    <Card container={card}/>
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
        </>
    )
}