import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeDetail.scss";

class PokeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
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
          image: info.sprites.front_default,
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
    const { image } = this.state;
    return (
      <article className="detail">
        <img src={image} alt={this.props.name} className="detail__image" />
        <h2 className="detail__name">{this.props.name}</h2>
        <p className="detail__height"></p>
        <p className="detail__weight"></p>
        <p className="detail__habilities"></p>
        <p className="detail__evolution">hola</p>
      </article>
    );
  }
}
PokeDetail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default PokeDetail;
