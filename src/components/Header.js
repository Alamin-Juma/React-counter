import React from "react";
import "../App.css";

/*first you should import any image you need*/
import image from  "../images/rain.png"

function Header() {
    return (
        <div>
            <h1>Welcome to Money Maker</h1>
            <p>Make my money rain</p>
            <span><img src={image}/></span>
        </div>
    )
}

export default Header