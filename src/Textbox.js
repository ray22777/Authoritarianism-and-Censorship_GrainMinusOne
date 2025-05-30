
import React from "react";

const TextBox = ({ isVisible, style, children }) => {
  return (
    <div
      className="exhibition-box"
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.2s ease",
      }}
    >
      {children}
    </div>
  );
};

export default TextBox;