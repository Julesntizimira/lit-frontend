import AddSection from "./addSection";
import CategoryContainer from "./categoryContainer";
import Footer from "./footer";
import NavigationBar from "./navigationBar";
import SearchBar from "./searchBar";

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
            <SearchBar />
            <NavigationBar />
            <main>
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
                <AddSection container={addtwo} />
                <Footer/>
            </main>
        </>
    )
}