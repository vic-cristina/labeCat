import React from "react";
import "./style.css";

const Card = ({ catName, catBreed, catWeight, catAge, catImg, myKittens }) => {
  return (
    <div
      className={myKittens ? `cat-card bg-orange-400` : `cat-card bg-base-100 `}
    >
      {console.log(catName, `is my cat: `, myKittens)}
      <figure className="max-h-64">
        <img src={catImg} alt="A cat" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{catName.toUpperCase()}</h2>
        <p>Breed: {catBreed}</p>
        <p>Weight: {catWeight}kg</p>
        <p>Age: {catAge}y</p>
        <div className="card-actions">
          <button className="btn mt-2 btn-primary">🧡</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

//card w-96 bg-base-100 shadow-xl max-sm:scale-75 max-sm:mb-2
