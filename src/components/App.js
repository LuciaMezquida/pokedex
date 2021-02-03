import "../styleSheets/App.scss";
import React from "react";
import PokeList from "./PokeList";
import PokeDetail from "./PokeDetail";
import Filter from "./Filter";
import apiCall from "../data/api";
import { Route, Switch } from "react-router-dom";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=900&offset=0";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      searchValue: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.renderPokeDetail = this.renderPokeDetail.bind(this);
  }
  componentDidMount() {
    apiCall(apiUrl).then((data) => {
      this.setState({
        apiData: data.results,
      });
    });
  }
  //Events
  handleInput(data) {
    this.setState({
      searchValue: data,
    });
  }
  //Render
  filteredData() {
    const filteredPokemon = this.state.apiData.filter((item) =>
      item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    return filteredPokemon;
  }
  renderPokeDetail(props) {
    const pokeDetailName = props.match.params.name;
    const pokeDetail = this.state.apiData.find(
      (item) => item.name === pokeDetailName
    );
    if (pokeDetail) {
      return <PokeDetail name={pokeDetail.name} url={pokeDetail.url} />;
    }
    // else {
    //   return <NotFound />;
    // }
  }

  render() {
    const { searchValue, apiData } = this.state;
    return (
      <div className="container">
        <header>
          <h1 className="title">¡Hazte con todos!</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Filter
                handleInput={this.handleInput}
                searchValue={searchValue}
              />
              <PokeList
                data={this.filteredData()}
                searchValue={searchValue}
              />
            </Route>
            <Route path="/:name" render={this.renderPokeDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
