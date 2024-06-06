// import { useState } from "react"

// export default function CategoryContainer (props) {
//     const {img, categoryName} = props
//     const normalStyles = {
//         backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.037), rgba(0, 0, 0, 0.037)), url(images/categories/${img})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//     }
//     const hoverStyle = {
//         backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.081), rgba(0, 0, 0, 0.081)), url(images/categories/${img})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//     }
//     const [styles, setStyles] = useState(normalStyles)
//     return (
//         <div className="category-container" 
//             onMouseOver={() => {
//                 setStyles(hoverStyle);
//             }}
//             onMouseLeave={() => {
//                 setStyles(normalStyles)
//             }}>
//             <div className="category-img-cont" style={styles}>
//             </div>
//             <p>{categoryName}</p>
//         </div>
//     )
// }


export default function CategoryContainer (props) {
    const {img, categoryName} = props
    return (
        <div className="category-container">

            <div className="category-img-cont">
                <div className="img-forground-cover"></div>
                <img src={`images/categories/${img}`} alt="" />
            </div>
            <div className="name-cont">
                <p>{categoryName}</p>
            </div>
     
        </div>
    )
}