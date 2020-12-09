import React, { useState, useEffect } from "react";
import "../styleSheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState([]);
  const [id, setId] = useState(0);

  const callingApi = () => {
    return fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setName(data.species.name);
        setUrl(data.sprites.front_default);
        setType(data.types);
        setId(data.id);
      });
  };
  useEffect(() => {
    callingApi();
  }, []);
  const typesList = type.map((item, index) => (
    <li key={index} className="list">
      {item.type.name}
    </li>
  ));
  return (
    <div className="poke-card">
      <p className="number">{`25/${id}`}</p>
      <img src={url} alt={props.name} className="poke-image" />
      <div className="text-container">
        <h2 className="poke-name">{props.name}</h2>
        <ul className="type-list">{typesList}</ul>
      </div>
    </div>
  );
};

Pokemon.propTypes = {};

Pokemon.defaultProps = {
  url: "../images/default-img.png",
  name: "En construcción",
};
export default Pokemon;
