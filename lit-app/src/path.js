export default function Path(props) {
    const { path } = props.container
    return (
        <div className="path-container">
                <p className="path">
                    <span>Home</span>
                    {
                        path.map((item) => {
                            return(
                                <>
                                    <i class="fa-solid fa-angle-right"></i>
                                    <span>{item}</span>
                                </>
                         
                            )
                        })
                    }                    
                </p>
        </div>

    )
}