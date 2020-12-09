import "../styleSheets/App.scss";
import React from "react";
import pokemon from "../data/pokemon.json";
import PokeList from "./PokeList";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <PokeList />
        </main>
      </div>
    );
  }
}

export default App;
