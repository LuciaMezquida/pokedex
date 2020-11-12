import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    return (
      <div className="poke-card">
        <img src="" alt="" className="poke-image" />
        <div className="text-container">
          <h2 className="poke-name"></h2>
          <ul className="type-list"></ul>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {};
export default Pokemon;
