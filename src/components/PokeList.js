import React from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeList.scss";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const cardList = this.props.data.map((item) => (
      // fetch(item.url)
      // .then((response) => response.json())
      // .then((info) => {
      //   <li key={index} className="list">
      //     <Pokemon
      //       url={info.sprites.front_default}
      //       name={info.species.name}
      //       type={info.types}
      //       id={info.id}
      //     />
      //   </li>;
      // });
      <li key={item.name} className="list">
        <Pokemon name={item.name} url={item.url} />
      </li>
    ));
    return <ul className="cards-list">{cardList}</ul>;
  }
}

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;
