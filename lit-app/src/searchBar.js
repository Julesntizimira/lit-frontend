export default function SearchBar() {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <div className="logo-cont">
                    <img src="./images/logos/ebay.png" alt="company-logo"/>
                </div>
                <div className="category-filter">
                    <span>Shop by category</span>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="search-input-cont">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder="Search for anything"/>
                    <div className="category-filter-input">
                        <span>All Categories</span>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <button className="search-btn">Search</button>
                <p>Advanced</p>
            </div>
        </div>
    )
}