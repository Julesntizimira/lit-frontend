
import AddSection from "./addSection";
import CategoryContainer from "./categoryContainer";
import Footer from "./footer";
import NavigationBar from "./heading/navigationBar";
import SearchBar from "./heading/searchBar";
import PromotionAdd from "./heading/promotionAdd";
import Card from "./card";
import { cards } from "./utils";

export default function Layout () {
    const categories = [
        {
            image_url: "luxury.jpg",
            categoryName: "Luxury"
        },
        {
            image_url: "sneakers.jpg",
            categoryName: "Sneakers"
        },
        {
            image_url: "P&A.jpg",
            categoryName: "P&A"
        },
        {
            image_url: "Refurbished.jpg",
            categoryName: "Refurbished"
        },
        {
            image_url: "cards.jpg",
            categoryName: "Trading cards"
        },
        {
            image_url: "preloved.jpg",
            categoryName: "Pre-loved Luxury"
        },
        {
            image_url: "toys.jpg",
            categoryName: "Toys"
        }
    ]
    const addOne = {
        title: "On the road in comfort and style",
        paragraph: "Equip your vehicle for the adventure of a lifetime.",
        btnContent: "Shop now",
        backgroundColor: "#93c9ff",
        textColor:  "#003060",
        btnStyle: {
            color: "#003060",
        },
        btnHoverStyle: {
            backgroundColor: "#003060",
            color: "#a4b8cc"
        }
    }
    const addtwo = {
        title: "Save on quality with refurbished",
        paragraph: "Create your dream home on a budget with trusted brands.",
        image_url: "cleaning.jpeg",
        btnContent: "Shop now",
        backgroundColor: "rgba(0, 0, 0, 0.037)",
        textColor:  "black",
        btnStyle: {
            color: "black",
        },
        btnHoverStyle: {
            backgroundColor: "black",
            color: "white"
        }
    }
    return (
        <>
            <div className="heading">
                <PromotionAdd />
                <SearchBar />
                <NavigationBar />
            </div>
         
            <main className="layout-main">
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
                <Footer/>
            </main>
        </>
    )
}