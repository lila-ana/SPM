import React, { useState } from "react";

function Card() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    transform: isHovered ? "translateY(-10px)" : "none",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div
      style={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
}

export default Card;
