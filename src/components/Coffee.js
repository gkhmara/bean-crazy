import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h3>Origin: {props.origin}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Roast: {props.roast}</h3>
      <h3>Quantity Availible: {props.quantity}</h3>
      <button onClick ={() => props.whenCoffeeClicked(props.id)}>Details</button>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;