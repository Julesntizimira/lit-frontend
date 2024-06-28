"use client";

export default function Path(props: any) {
    const { path } = props.container
    return (
        <div className="path-container">
                <p className="path">
                    <span>Home</span>
                    {
                        path.map((item : any) => {
                            return(
                                <>
                                    <i className="fa-solid fa-angle-right"></i>
                                    <span>{item}</span>
                                </>
                         
                            )
                        })
                    }                    
                </p>
        </div>

    )
}