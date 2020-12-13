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
      id: 0,
      species: "",
      evolution: "",
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((info) =>
        this.setState({
          name: info.name,
          url: info.sprites.front_default,
          type: info.types,
          id: info.id,
          species: info.species.url,
        })
      )
      .then(() =>
        fetch(this.state.species)
          .then((response) => response.json())
          .then((data) => {
            if (data.evolves_from_species !== null) {
              this.setState({ evolution: data.evolves_from_species.name });
            }
          })
      );
  }
  render() {
    const { url, name, type, id, evolution } = this.state;
    const evolutionClass = evolution !== "" ? `Evoluciona de ${evolution}` : "";
    const typesList = type.map((item, index) => (
      <li key={index} className="list">
        {item.type.name}
      </li>
    ));
    return (
      <div className="poke-card">
        <p className="number">{`${this.props.num}/${id}`}</p>
        <img src={url} alt={name} className="poke-image" />
        <div className="text-container">
          <h2 className="poke-name">{name}</h2>
          <div className="evolution-container">
            <ul className="type-list">{typesList}</ul>
            <p className="evolution">{evolutionClass}</p>
          </div>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  num: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

Pokemon.defaultProps = {
  url: "../images/default-img.png",
  name: "En construcción",
};
export default Pokemon;
