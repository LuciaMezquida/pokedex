import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const typesList = this.props.types.map((item, index) => (
      <li key={index} className="list">
        {item}
      </li>
    ));
    return (
      <div className="poke-card">
        <img src={this.props.url} alt={this.props.name} className="poke-image" />
        <div className="text-container">
          <h2 className="poke-name">{this.props.name}</h2>
          <ul className="type-list">{typesList}</ul>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

Pokemon.defaultProps = {
  url: "../images/default-img.png",
  name: "En construcción",
};
export default Pokemon;
