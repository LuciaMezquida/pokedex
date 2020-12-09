import React from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeList.scss";
import Pokemon from "./Pokemon";
import Filter from "./Filter";
import apiCall from "../data/api";

class PokeList extends React.Component {
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
    const cardList = this.filteredData().map((item, index) => (
      <li key={index} className="list">
        <Pokemon name={item.name} url={item.url} />
      </li>
    ));
    return (
      <>
        <Filter
          handleInput={this.handleInput}
          searchValue={this.state.searchValue}
        />
        <ul className="cards-list">{cardList}</ul>
      </>
    );
  }
}

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;
