import "../styleSheets/App.scss";
import React from "react";
import PokeList from "./PokeList";
import PokeDetail from "./PokeDetail";
import Filter from "./Filter";
import apiCall from "../data/api";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      searchValue: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }
  componentDidMount() {
    apiCall().then((data) => {
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
                num={apiData.length}
              />
            </Route>
            <Route path="/:name" component={PokeDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
