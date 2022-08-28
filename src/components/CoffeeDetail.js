import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingPurchase } = props;

  return(
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Name: {coffee.name} - Price: ${coffee.price}</h3>
      <p><em>Origin: {coffee.origin} - Roast: {coffee.roast}</em></p>
      <p><em>Quantity: {coffee.quantity}</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Close Order</button>
      <button onClick={() => onClickingPurchase(coffee.id) }>Purchase Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func
}

export default CoffeeDetail;