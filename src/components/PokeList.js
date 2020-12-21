import React from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeList.scss";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

class PokeList extends React.Component {
  render() {
    const { data, num } = this.props;
    const cardList = data.map((item) => (
      <Link className="link" to={`/${item.name}`}>
        <li key={item.name} className="list">
          <Pokemon name={item.name} url={item.url} num={num} />
        </li>
      </Link>
    ));
    return <ul className="cards-list">{cardList}</ul>;
  }
}

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
  num: PropTypes.number.isRequired,
};

export default PokeList;
