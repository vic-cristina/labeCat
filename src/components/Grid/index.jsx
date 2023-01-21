import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./style.css";

const Grid = ({ cats }) => {
  return (
    <div className="hero grid pt-24 overflow-y-scroll no-scrollbar max-sm:max-w-screen-sm min-h-screen bg-base-200">
      <div className="z-0 flex items-center justify-center max-w-screen gap-4 p-4 flex-wrap  flex-col lg:flex-row-reverse">
        {cats.map((cat, key) => {
          return (
            <Card
              key={key}
              catName={cat.name}
              catBreed={cat.breed}
              catWeight={cat.weight}
              catAge={cat.age}
              catImg={cat.img}
              myKittens={cat.myKittens}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
