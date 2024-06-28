"use client"

import Footer from "@/components/footer";
import NavigationBar from "@/components/heading/navigationBar";
import PromotionAdd from "@/components/heading/promotionAdd";
import SearchBar from "@/components/heading/searchBar";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
      <>
          <div className="heading">
              <PromotionAdd/>
              <NavigationBar />
              <SearchBar />
          </div>
          <main className="layout-main">
              {children}
          </main>
          <Footer/>
      </>
    )
  }