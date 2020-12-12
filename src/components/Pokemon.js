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
      error: null,
    };
    this.callingApi = this.callingApi.bind(this);
  }
  callingApi = () => {
    return fetch(this.props.url)
      .then((response) => response.json())
      .then((info) => {
        return info;
      });
  };
  async componentDidMount() {
    try {
      const data = await this.callingApi();
      this.setState({
        name: data.name,
        url: data.sprites.front_default,
        type: data.types,
        id: data.id,
      });
    } catch (error) {
      this.setState({ error: error });
    }
  }
  render() {
    console.log(this.props);
    const { url, name, type, id } = this.state;
    const typesList = type.map((item, index) => (
      <li key={index} className="list">
        {item.type.name}
      </li>
    ));
    return (
      <div className="poke-card">
        <p className="number">{`25/${id}`}</p>
        <img src={url} alt={name} className="poke-image" />
        <div className="text-container">
          <h2 className="poke-name">{name}</h2>
          <ul className="type-list">{typesList}</ul>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

Pokemon.defaultProps = {
  url: "../images/default-img.png",
  name: "En construcción",
};
export default Pokemon;
