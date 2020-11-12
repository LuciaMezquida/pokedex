import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    console.log(this.props.url);
    console.log(this.props.name);
    console.log(this.props.types);
    return (
      <div className="poke-card">
        <img src={this.props.url} alt={this.props.name} className="poke-image" />
        <div className="text-container">
          <h2 className="poke-name">{this.props.name}</h2>
          <ul className="type-list"></ul>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {};
export default Pokemon;
