import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const cardList = this.props.data.map((item) => (
      <li key={item.id} className="list">
        <Pokemon url={item.url} name={item.name} types={item.types} />
      </li>
    ));
    return <ul className="cards-list">{cardList}</ul>;
  }
}

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;
