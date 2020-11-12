import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    return <ul className="cards-list"></ul>;
  }
}

PokeList.propTypes = {};
export default PokeList;
