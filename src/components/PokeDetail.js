import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeDetail.scss";
import { Link } from "react-router-dom";
import apiCall from "../data/api";

class PokeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      image_back: "",
      height: 0,
      weight: 0,
      evolution: "",
      abilities: [],
      species: "",
      evolve_to1: "",
      evolve_to2: "",
      evolve_to3: "",
    };
  }
  componentDidMount() {
    apiCall(this.props.url)
      .then((info) =>
        this.setState({
          name: info.name,
          image: info.sprites.front_default,
          image_back: info.sprites.back_default,
          height: info.height,
          weight: info.weight,
          abilities: info.abilities,
          species: info.species.url,
        })
      )
      .then(() =>
        apiCall(this.state.species).then((data) => {
          this.setState({ evolution: data.evolution_chain.url });
        })
      )
      .then(() =>
        apiCall(this.state.evolution).then((evol) => {
          let evol3 =
            evol.chain.evolves_to[0].evolves_to[0] !== undefined
              ? evol.chain.evolves_to[0].evolves_to[0].species.name
              : "";
          this.setState({
            evolve_to1: evol.chain.species.name,
            evolve_to2: evol.chain.evolves_to[0].species.name,
            evolve_to3: evol3,
          });
        })
      );
  }
  render() {
    const {
      image,
      image_back,
      height,
      weight,
      abilities,
      evolve_to1,
      evolve_to2,
      evolve_to3,
    } = this.state;
    const moves = abilities.map((item) => " " + item.ability.name);
    let evol3_condition =
      evolve_to3 !== "" ? `, el cual evoluciona a ${evolve_to3}` : "";
    return (
      <>
        <article className="detail">
          <div>
            <img
              className="detail__image"
              src={
                image
                  ? image
                  : "//askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg"
              }
              alt={this.props.name}
              className="detail__image"
            />
            <img
              src={image_back}
              alt={image_back ? this.props.name : ""}
              className="detail__image"
            />
          </div>
          <div>
            <h2 className="detail__name">{`Nombre: ${this.props.name}`}</h2>
            <p className="detail__height">
              <b>Altura:</b>
              {` ${height} m`}
            </p>
            <p className="detail__weight">
              <b>Peso:</b>
              {` ${weight} kg`}
            </p>
            <p className="detail__abilities">
              <b>Habilidades:</b>
              {` ${moves}`}
            </p>
            <p className="detail__evolution">
              <b>Evoluciones:</b>
              {` ${evolve_to1} evoluciona a ${evolve_to2}${evol3_condition}`}
            </p>
          </div>
        </article>
        <div className="btn-container">
          <Link className="link" to="/">
            <a href="" className="detail__btn link">
              Volver
            </a>
          </Link>
        </div>
      </>
    );
  }
}
PokeDetail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default PokeDetail;
