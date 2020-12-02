import React from "react";
import "../App.css";

const Button = ({increment, decrement, reset, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(increment);
    };

    const handleClick2 = () => {
        onClickFunction(decrement);
    };

    const resetToZero = () => {
        onClickFunction();
    };

    return [
        <div className="Button ">
            <button onClick={handleClick}>+{increment}</button>
            <button onClick={handleClick2}>{decrement}</button>
            <div>
                <button onClick={resetToZero}>Reset{reset}</button>
            </div>
        </div>
    ];
}

export default Button;

