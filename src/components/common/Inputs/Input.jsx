import React from "react";
// import "./input.css";

const Input = ({ type, placeholder, state, setState, required }) => {
  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      
      className="custom-input"
    />
  );
};

export default Input;
