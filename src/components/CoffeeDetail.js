import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.price}</h3>
      <p><em>{coffee.origin} - {coffee.roast}</em></p>
      <button onClick={()=> onClickingDelete(coffee.id) }>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default CoffeeDetail;