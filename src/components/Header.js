import React from "react";
import "../App.css";

/*first you should import any image you need*/
import image from  "../images/rain.png"

function Header() {
    return (
        <div className= "Header">
            <h4>Welcome to Money Maker</h4>
            <h6>Make my4 money rain <img src={image}/></h6>
        </div>
    )
}

export default Header