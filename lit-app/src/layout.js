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
                <SearchBar />
                <NavigationBar />
            </div>
         
            <main className="layout-main">
                <Outlet />  
            </main>
            <Footer/>
        </>
    )
}