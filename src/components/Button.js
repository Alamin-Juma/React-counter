import React from "react";
import "../App.css";

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
      <div className="Button ">
        <button onClick={handleClick}>+{increment}</button>
      </div>
  );

};

export default Button;
