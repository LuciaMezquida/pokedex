import "../styleSheets/App.scss";
import React from "react";
import pokemon from "../data/pokemon.json";
import PokeList from "./PokeList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">¡Hazte con todos!</h1>
        </header>
        <main>
          <PokeList />
        </main>
      </div>
    );
  }
}

export default App;
