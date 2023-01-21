import React, { useState, useEffect } from "react";

const Card = ({ catName, catBreed, catWeight, catAge, catImg, myKittens }) => {
  return (
    <div
      className={
        myKittens
          ? `card w-96 bg-orange-400 scale-90 shadow-xl max-sm:scale-75 max-sm:mb-2`
          : `card w-96 bg-base-100 scale-90 shadow-xl max-sm:scale-75 max-sm:mb-2`
      }
    >
      {console.log(catName, `is my cat: `, myKittens)}
      <figure className="px-10 pt-10 max-h-64">
        <img
          src={catImg}
          alt="Shoes"
          className="rounded-xl h-72 object-scale-down"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{catName.toUpperCase()}</h2>
        <p>Breed: {catBreed}</p>
        <p>Weight: {catWeight}kg</p>
        <p>Age: {catAge}y</p>
        <div className="card-actions">
          <button className="btn  btn-primary">🧡</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

//card w-96 bg-base-100 shadow-xl max-sm:scale-75 max-sm:mb-2
