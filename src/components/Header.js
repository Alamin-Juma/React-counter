import React from "react";
import "../App.css";

/*first you should import any image you need*/
import image from  "../images/rain.png"

function Header() {
    return (
        <div className= "Header">
            <h4>Money Maker</h4>
            Make my money rain<img src={image}/>
        </div>
    )
}

export default Header