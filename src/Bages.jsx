import React, { useState } from "react";
import "./Bages.css";

export default function Bages() {
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(index); // Set the flipped card index
    setTimeout(() => setFlipped(null), 1000); // Reset after animation (1 second)
  };

  return (
    <>
      <div className="bages">
        {["C++", "MERN", "Node"].map((item, index) => (
          <div
            key={index}
            className={`bg1 ${flipped === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="bages">
        {["SQL", "MySQL", "Git & Github"].map((item, index) => (
          <div
            key={index + 3} // Unique index for the second row
            className={`bg1 ${flipped === index + 3 ? "flipped" : ""}`}
            onClick={() => handleFlip(index + 3)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}
