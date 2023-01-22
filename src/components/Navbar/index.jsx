import React, { useEffect, useState } from "react";
import "./style.css";

const Navbar = ({ catData, onGetFilteredCats, onCalcAverage }) => {
  const [cats, setCats] = useState([]);
  const [searchedCat, setSearchedCat] = useState("");

  const handleChange = (event) => setSearchedCat(event.target.value);
  //COMMENT Capturamos o valor do input dando a ele um atributo value, que recebe o state searchedCat. handleChange() nos garante que o valor do input mude a cada evento capturado. Então, em handleClick() utilizamos searchCat como critério de comparação com os dados extraídos do objeto cat.

  const handleClick = () => {
    const filteredCats = catData.filter((cat) => {
      if (cat.name.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
      if (cat.breed.toLowerCase().includes(searchedCat.toLowerCase()))
        return cat;
    });
    setCats(filteredCats);
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
    <div className="labecat-navbar max-sm:px-5">
      <div className="lg:min-h-full">
        <a href="/" className="labenu-button">
          <img width={50} src="/labelogo.png" alt="" />
        </a>
        <a className="p-5 relative right-6 normal-case text-xl">labeCat</a>
      </div>
      <div className="input-wrapper">
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

        <button onClick={handleClick} className="find-cats-btn">
          <span className="max-sm:hidden">Find cats</span> <span>🧡</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
