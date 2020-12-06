import "../styleSheets/App.css";
import React from "react";
import pokemon from "../data/pokemon.json";
import PokeList from "./PokeList";
import Filter from "./Filter";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">¡Hazte con todos!</h1>
        <Filter />
        <PokeList data={pokemon} />
      </div>
    );
  }
}

export default App;
