export default function SelectAddress() {
    return (
        <section className="select-address-section">
            <h3>Select Address</h3>
            <div className="address-content">
                <input placeholder="Type your Address"/>
            </div>
            <div className="add-new-address">
                <div className="add-new-address-svgs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="548" height="1" viewBox="0 0 548 1" fill="none">
                        <line y1="0.75" x2="548" y2="0.75" stroke="url(#paint0_linear_615_2032)" stroke-width="0.5" stroke-dasharray="3 3"/>
                        <defs>
                        <linearGradient id="paint0_linear_615_2032" x1="555.117" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stop-color="#E6E6E6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <svg style={{minWidth: "14px", cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z" fill="black"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="548" height="1" viewBox="0 0 548 1" fill="none">
                        <line x1="548" y1="0.25" y2="0.25" stroke="url(#paint0_linear_615_2038)" stroke-width="0.5" stroke-dasharray="3 3"/>
                        <defs>
                        <linearGradient id="paint0_linear_615_2038" x1="-7.1169" y1="0" x2="548" y2="0" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stop-color="#E6E6E6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p>Add new Address</p>
            </div>
            <div className="back-next-btns">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
            </div>
        </section>
    )
}