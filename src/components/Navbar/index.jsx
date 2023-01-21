import React, { useEffect, useState } from "react";

const Navbar = ({ catData, onGetFilteredCats }) => {
  const [cats, setCats] = useState([]);
  const [searchedCat, setSearchedCat] = useState("");

  const handleChange = (event) => {
    setSearchedCat(event.target.value);
    console.log(event.target.value);
    // if (searchedCat === "") setCats(cat_db);
  };

  const gambiarra = () => {
    handleClick();
    handleClick();
  };

  const handleClick = () => {
    const filteredCats = catData.filter((cat) => {
      if (cat.name.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
      if (cat.breed.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
    });
    setCats(filteredCats);
    console.log("Filtered cats", cats);
    // onGetFilteredCats(cats);
    //COMMENT Ao invés de mandar o state para o componente pai (App) na função handleClick, usamos um useEffect, que imediatamente alimenta o pai com os dados do array filtrado, a cada vez que a função handleClick() é chamada.
    if (searchedCat === "") {
      alert("Por favor, procure pelo nome ou raça");
    }
    simpleAverage(cats);
  };

  function simpleAverage(cats) {
    let catWeight = [];
    let catAge = [];
    cats.forEach((cat) => {
      catWeight.push(cat.weight);
      catAge.push(cat.age);
    });
    const catWeightSum = catWeight.reduce((a, b) => a + b, 0);
    const catAgeSum = catAge.reduce((a, b) => a + b, 0);
    console.log(
      "Média de peso dos gatos buscados",
      (catWeightSum / catWeight.length).toFixed(2)
    );
    console.log(
      "Média de idade dos gatos buscados",
      (catAgeSum / catAge.length).toFixed(2)
    );
  }

  useEffect(() => {
    onGetFilteredCats(cats);
  }, [handleClick]);
  //COMMENT A cada vez que handleClick é executada, alimentamos o componente pai com o state, que corresponde a filteredCats gerada em handleClick();

  return (
    <div className="navbar bg-base-100 fixed z-20 justify-end sm:flex-wrap sm:h-36 sm:flex-col xl:h-10">
      <div className="lg:min-h-full">
        <a
          href="/"
          className="btn-link rounded-xl antialiased animate-pulse w-20"
        >
          <img width={50} src="/labelogo.png" alt="" />
        </a>
        <a className="p-5 normal-case text-xl">labeCat</a>
      </div>
      <div className="flex justify-end">
        <div className="form-control">
          <input
            type="text"
            value={searchedCat}
            placeholder="Search"
            className="input input-bordered mx-20"
            onChange={handleChange}
          />
        </div>

        <button onClick={gambiarra} className="btn btn-primary p-2">
          Find cats 🧡
        </button>
      </div>
    </div>
  );
};

export default Navbar;
