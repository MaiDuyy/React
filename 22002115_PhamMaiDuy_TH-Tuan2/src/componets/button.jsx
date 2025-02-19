import React from "react";
import "./Button.css";

function Button({ color, text, onClick }) {
  return (
    <button className={`color-button ${color}`} onClick={onClick}>
      {text}
    </button>
    
  );
}

export default Button;
