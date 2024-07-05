"use client"

import Footer from "@/components/footer";
import NavigationBar from "@/components/heading/navigationBar";
import PromotionAdd from "@/components/heading/promotionAdd";
import SearchBar from "@/components/heading/searchBar";
import { useEffect, useState } from "react";
import { doGetSession } from "../actions";




export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [sessionChecked, setSessionChecked] = useState(false);

    useEffect(() => {
      doGetSession()
      .then((data) => {
        if(data) {
          setLoggedInUser(data);
          console.log(data);
        }
        setSessionChecked(true);
      })
    }, [])
    if(!sessionChecked) {
      return null;
    }

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