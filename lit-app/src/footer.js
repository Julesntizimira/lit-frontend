import { Link } from "react-router-dom";
import { footerColumns } from "./utils";


export default function Footer () {
    return (
        <footer>
            <div className="footer-main-wrapper">
               {
                footerColumns.map((column) => {
                    return(
                        <div className="footer-column">
                            <h3 className="footer-column-title">{column.title}</h3>
                            <ul className="footer-items">
                                {
                                    column.items.map((item) => {
                                        return(
                                            <li>
                                                {item.icon &&  (<i className={`fa-brands fa-${item.icon}`}></i>)}
                                                <Link className="footer-link" to="">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
               }
       
               
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 lit App. All Rights Reserved.</p>
            </div>
        </footer>
    )
}