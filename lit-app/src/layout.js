import Footer from "./footer";
import NavigationBar from "./heading/navigationBar";
import SearchBar from "./heading/searchBar";
import PromotionAdd from "./heading/promotionAdd";
import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
        <>
            <div className="heading">
                <PromotionAdd />
                <NavigationBar />
                <SearchBar />
            </div>
         
            <main className="layout-main">
                <Outlet />  
            </main>
            <Footer/>
        </>
    )
}