import { useState } from "react";

export default function AddSection(props) {
    const {title, paragraph, btnContent, image_url, backgroundColor, textColor, btnStyle, btnHoverStyle} = props.container;
    const addImageContStyle = {
        background: `url(images/adds/${image_url}) center/cover no-repeat`
    }
    const [styleBtn, setStyleBtn] = useState(btnStyle)
    return (
        <section className="add-section">
            <div className="add-container" style={{
                backgroundColor: backgroundColor
            }}>
                <div 
                    className="add-section-content"
                    style={{
                        color: textColor
                    }}
                >
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                    <button
                        style={styleBtn}
                        onMouseOver={() => {
                            setStyleBtn(btnHoverStyle)
                        }}
                        onMouseLeave={() => {
                            setStyleBtn(btnStyle)
                        }}
                    >{btnContent}</button>
                </div>
                <div className="add-img-cont" style={addImageContStyle}></div>
            </div>
        </section>
    )
}