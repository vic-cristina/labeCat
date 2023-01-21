import React, { useEffect, useState } from "react";

const Navbar = ({ catData, onGetFilteredCats, onCalcAverage }) => {
  const [cats, setCats] = useState([]);
  const [searchedCat, setSearchedCat] = useState("");

  const handleChange = (event) => {
    setSearchedCat(event.target.value);
    console.log(event.target.value);
    // if (searchedCat === "") setCats(cat_db);
  };
  //COMMENT Capturamos o valor do input dando a ele um atributo value, que recebe o state searchedCat. handleChange() nos garante que o valor do input mude a cada evento capturado. Então, em handleClick() utilizamos searchCat como critério de comparação com os dados extraídos do objeto cat.

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
  };

  const handleEnter = (event) => {
    event.key === "Enter" ? handleClick() : null;
  };

  useEffect(() => {
    onGetFilteredCats(cats);
    onCalcAverage(cats);
  }, [handleClick]);
  //COMMENT A cada vez que handleClick é executada, alimentamos as funções do componente pai com o state, que corresponde a filteredCats gerada em handleClick();

  return (
    <div className="navbar bg-base-100 fixed z-20 justify-end sm:flex-wrap sm:h-36 max-sm:h-36 max-sm:flex-wrap max-sm:justify-start sm:flex-col xl:h-10  sm:max-w-screen">
      <div className="lg:min-h-full">
        <a
          href="/"
          className="btn-link rounded-xl antialiased animate-pulse w-20"
        >
          <img width={50} src="/labelogo.png" alt="" />
        </a>
        <a className="p-5 normal-case text-xl">labeCat</a>
      </div>
      <div className="flex gap-2 lg:min-h-full max-sm:justify-start justify-end">
        <div className="flex">
          <input
            type="text"
            value={searchedCat}
            placeholder="Search"
            className="input input-bordered "
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary p-4">
          <span className="max-sm:hidden">Find cats</span> <span>🧡</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
