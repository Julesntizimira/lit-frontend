
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