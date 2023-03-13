import React from "react";
import { useState } from "react";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="container">
      <div className="Semaforo">
        <span
          onClick={() => setSelectedColor ("red")}
          className={`luces Red-Down ${selectedColor === "red" ? "red" : ""}`}>
        </span>
        <span 
        onClick={() => setSelectedColor ("yellow")}
        className={`luces Yellow-Down ${selectedColor === "yellow" ? "yellow" : ""}`}>
        </span>
        <span 
        onClick={() => setSelectedColor ("green")}
        className={`luces Green-Down ${selectedColor === "green" ? "green" : ""}`}>
        </span>
      </div>
      <div className="stick">
      </div>
      <div className="floor"></div>
    </div>

  );
}

export default TrafficLight;