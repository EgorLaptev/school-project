import React, {useEffect} from "react";


function ScrollIntoView() {

    useEffect(()=>{
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    return null;

}


export default ScrollIntoView;