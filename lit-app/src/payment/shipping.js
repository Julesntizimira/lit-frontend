export default function Shipping() {
    return (
        <section className="select-address-section">
            <h3>Shipping Method</h3>
            <div className="address-content">
                <form className="shipping-methods">
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free" />
                            <span className="shipping-type">Free</span>
                            <span>Regular Shipment</span>
                        </div>
                        <p className="shipping-date">17 Oct, 2024</p>
                    </label>
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free"/>
                            <span className="shipping-type">$8.50</span>
                            <span>Get your delivery as soon as possible</span>
                        </div>
                        <p className="shipping-date">1 Oct, 2024</p>
                    </label>
                    <label className="method-container">
                        <div className="method-content">
                            <input type="radio" name="free"/>
                            <span className="shipping-type">Schedule</span>
                            <span>Pick a date when you want to get your delivery</span>
                        </div>
                        <p className="shipping-date">Select Date</p>
                    </label>
                </form>
            </div>
            <div className="back-next-btns">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
            </div>
        </section>
    )
}