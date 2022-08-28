import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
    <hr />
    {props.coffeeList.map((coffee) => 
      <Coffee
        whenCoffeeClicked = { props.onCoffeeSelection }
        whenPurchasedCoffeeClicked = { props.onClickingPurchase }
        name={coffee.name}
        origin={coffee.origin}
        price={coffee.price}
        roast={coffee.roast}
        quantity={coffee.quantity}
        id={coffee.id}
        key={coffee.id}
      />
    )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onClickingPurchase: PropTypes.func
};

export default CoffeeList;