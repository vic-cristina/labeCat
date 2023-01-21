import { useState } from "react";
import "./App.css";
import { cat_db } from "./cat_db";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

function App() {
  const [cats, setCats] = useState(cat_db);
  const [filteredCats, setFilteredCats] = useState([]);

  const getFilteredCats = (filteredCats) => {
    setFilteredCats(filteredCats);
    console.log(filteredCats);
    return filteredCats;
  };

  function calcAverage(cats) {
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
    <div data-theme="synthwave">
      <Navbar
        onGetFilteredCats={getFilteredCats}
        onCalcAverage={calcAverage}
        catData={cats}
      />
      <Grid cats={filteredCats.length > 0 ? filteredCats : cats} />
      <Footer />
    </div>
  );
}

export default App;
