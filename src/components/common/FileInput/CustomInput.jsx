import React from "react";
import "./index.css";

// const INPUT_VARIANTS = {
//   DEFAULT: "DEFAULT",
//   SMALL: "SMALL",
// };

const CustomInput = ({
  type = "text",
  placeholder = "",
  value,
  onChange = () => {},
  variant = "",
}) => {
  if (variant === "small") {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="small-input"
      />
    );
  }
  if (variant === "extra-small") {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="extra-small-input"
      />
    );
  } else {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-input"
      />
    );
  }
};

export default CustomInput;
