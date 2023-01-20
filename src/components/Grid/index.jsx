import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./style.css";

const Grid = ({ cats }) => {
  return (
    <div className="hero grid pt-24 overflow-y-scroll no-scrollbar min-h-screen bg-base-200">
      <div className="hero-content flex-wrap  flex-col lg:flex-row-reverse">
        {cats.map((cat, key) => {
          return (
            <Card
              key={key}
              catName={cat.name}
              catBreed={cat.breed}
              catWeight={cat.weight}
              catAge={cat.age}
              catImg={cat.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
