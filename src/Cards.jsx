import "./Cards.css";
import NAV from "./NAV.jpg";
import ROBO from "./ROBO.jpg";
import MBRT from "./MBRT.jpg";

import React, { useState } from "react";

export default function AnimatedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: `${NAV}`,
      description:
        "College Navigation System is a web application designed to simplify indoor navigation on campus. Users can input a room number, and the system displays a static map of the room for easy identification. Built with HTML, CSS, JavaScript, and an MySQL database for storing room maps, it offers a user-friendly solution to help students and visitors navigate the college efficiently.",
    },
    {
      image: `${ROBO}`,
      description:
        "The Automatic Pesticides Spraying Robot is an IoT-based, Bluetooth-controlled robot designed for efficient crop spraying. Powered by an Arduino Uno and a battery source, it features an all-directional motion system and uses a water pump to spray pesticides effectively. This innovative solution aims to reduce manual labor and improve agricultural productivity.",
    },
    {
      image: `${MBRT}`,
      description:
        "Our project automates the MBRT process using Raspberry Pi, an image-processing camera, and a cloud-supported dashboard. The system detects color changes in real-time, visualizes data through a user-friendly interface, and stores results on the cloud for easy access. This ensures accurate, efficient, and reliable milk quality analysis with minimal human intervention.",
    },
  ];

  const handleScroll = (direction) => {
    if (direction === "next" && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="scroll-button" onClick={() => handleScroll("prev")}>
        &lt;
      </button>
      <div className="carousel-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? "active" : ""} ${
              index < currentIndex ? "left" : ""
            } ${index > currentIndex ? "right" : ""}`}
          >
            <div className="card-content">
              <div className="card-image">
                <img src={card.image} alt={`Card ${index + 1}`} />
              </div>
              <div className="card-description">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={() => handleScroll("next")}>
        &gt;
      </button>
    </div>
  );
}
