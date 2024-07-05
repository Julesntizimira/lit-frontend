"use client"
import { useState } from "react";

export default function  Pagination (props: any) {
    const {totalPosts, perPage, setCurrentPage, currentPage} = props.container
    let pages = [];
    const totalPages = Math.ceil(totalPosts/perPage);
    const [currentPageIntervalStart, setCurrentPageIntervalStart] = useState(1)
    const [currentPageIntervalEnd, setCurrentPageIntervalEnd] = useState(5 > totalPages ? 5 : totalPages)

    console.log(currentPageIntervalEnd);
    console.log(totalPages);


    for(let i = currentPageIntervalStart; i <= currentPageIntervalEnd; i++) {
        pages.push(i);
    }
    if (currentPageIntervalEnd < totalPages) {
        pages.push("...");
        pages.push(totalPages);
    }
   

    

    return ( 
          <div className="products-pagination">
            {currentPageIntervalStart > 1 && (<i className="fa-solid fa-angle-left"
                onClick={() => {
                    setCurrentPageIntervalStart ((prev) => {
                        if ((prev - 3) < 1) {
                            return 1
                        } else {
                            return (prev - 3)
                        }
                    })
                    setCurrentPageIntervalEnd ((prev) => {
                        if ((prev - 3) < 5) {
                            return 5
                        } else {
                            return (prev - 3)
                        }
                    })
                }}
            ></i>)}
          
            {pages.map((page, index) => {
                return(
                    <p key={index} className={`page-container ${page === currentPage ? "active" : ""}`}
                        onClick={() => {
                            if (page !== "...") {
                                setCurrentPage(page)
                            }
                        }}
                    >{page}
                    </p>
                )
            })}
            {currentPageIntervalEnd < totalPages && (<i className="fa-solid fa-angle-right"
                onClick={() => {
                    setCurrentPageIntervalEnd ((prev) => {
                        if ((prev + 3) > totalPages) {
                            return totalPages
                        } else {
                            return (prev + 3)
                        }
                    })
                    setCurrentPageIntervalStart ((prev) => {
                        if ((prev + 3) > totalPages - 4) {
                            return totalPages - 4;
                        } else {
                            return (prev + 3)
                        }
                    })
                }}
            ></i>)}
        </div>  
    )
}