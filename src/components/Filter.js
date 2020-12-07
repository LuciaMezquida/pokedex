import "../styleSheets/Filter.scss";
import PropTypes from "prop-types";
const Filter = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.currentTarget.value);
  };
  return (
    <form className="main__form">
      <input
        onChange={handleInput}
        type="text"
        name="filter"
        id="filter"
        className="main__form-input"
        placeholder="Filtra pokemons por nombre"
        value={props.searchValue}
      />
    </form>
  );
};
Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
export default Filter;
