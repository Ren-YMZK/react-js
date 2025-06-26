import React from "react";

const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = {
    color,
    fontSize: "18px",
  };

  return (
    <div>
      <p style={contentStyleA}>{children}</p>
    </div>
  );
};

export default ColorfulMessage;
