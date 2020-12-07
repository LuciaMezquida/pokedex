import React from "react";
import "../styleSheets/Pokemon.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      type: [],
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.species.name,
          url: data.sprites.front_default,
          type: data.types,
        })
      );
  }
  render() {
    const typesList = this.state.type.map((item, index) => (
      <li key={index} className="list">
        {item.type.name}
      </li>
    ));
    return (
      <div className="poke-card">
        <img
          src={this.state.url}
          alt={this.state.name}
          className="poke-image"
        />
        <div className="text-container">
          <h2 className="poke-name">{this.state.name}</h2>
          <ul className="type-list">{typesList}</ul>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {};

Pokemon.defaultProps = {
  url: "../images/default-img.png",
  name: "En construcción",
};
export default Pokemon;
