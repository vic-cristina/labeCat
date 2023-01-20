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
    return filteredCats;
  };

  return (
    <div data-theme="synthwave">
      <Navbar onGetFilteredCats={getFilteredCats} catData={cats} />
      <Grid cats={filteredCats.length > 0 ? filteredCats : cats} />
      <Footer />
    </div>
  );
}

export default App;
