import React, { useState } from "react";
import PropTypes from "prop-types";
const Filter = () => {
  return (
    <form className="main__form">
      <label htmlFor="filter" className="main__form-title">
        Con cual te quedas?
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        className="main__form-input"
      />
    </form>
  );
};
Filter.propTypes = {};
export default Filter;
