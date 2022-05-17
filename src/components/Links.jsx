import React from "react";

const Links = ()=>{
    let info =[
        "Services",
        "Projects",
        "About"
    ]


    const midbar =  info.map((item) => <p>{item}</p> )

    return <div>{midbar}</div>
}

export default Links;