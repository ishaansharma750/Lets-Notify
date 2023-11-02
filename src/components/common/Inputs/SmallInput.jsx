import React from "react";
// import "./input.css";

const Input = ({ type, placeholder, state, setState, required }) => {
  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="small-input"
    />
  );
};

export default Input;
