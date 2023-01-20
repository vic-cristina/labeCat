import React, { useState } from "react";

const Navbar = ({ catData, onGetFilteredCats }) => {
  const [cats, setCats] = useState([]);
  const [searchedCat, setSearchedCat] = useState("");

  const handleChange = (event) => {
    setSearchedCat(event.target.value);
    console.log(event.target.value);
    // if (searchedCat === "") setCats(cat_db);
  };

  const handleClick = () => {
    const filteredCats = catData.filter((cat) => {
      if (cat.name.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
      if (cat.breed.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
    });
    //BUG O state (cats) está atrasado, o que requer que o usuário clique duas vezes no botão para que handleClick() funcione. Sei que o state entra em cache e é atualizado na próxima renderização, para corrigir tal comportamento acredito que seria necessário utilizar useEffect(), mas deixemos isto para o próximo projeto.
    setCats(filteredCats);
    console.log("Filtered cats", cats);
    onGetFilteredCats(cats);
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

        <button onClick={handleClick} className="btn btn-primary p-2">
          Find cats 🧡
        </button>
      </div>
    </div>
  );
};

export default Navbar;
