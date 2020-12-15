import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styleSheets/PokeDetail.scss";

class PokeDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="detail">
        <img src="" alt="" className="detail__image" />
        <h2 className="detail__name"></h2>
        <p className="detail__height"></p>
        <p className="detail__weight"></p>
        <p className="detail__habilities"></p>
        <p className="detail__evolution"></p>
      </article>
    );
  }
}
PokeDetail.propTypes = {};
export default PokeDetail;
