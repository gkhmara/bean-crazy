import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    name: "Super Cup",
    origin: "Hawaii",
    price: 4.99,
    roast: "Dark"
  },
  {
    name: "Deluxe Cup",
    origin: "Mexico",
    price: 3.99,
    roast: "Medium"
  },
  {
    name: "Special Cup",
    origin: "USA",
    price: 2.99,
    roast: "Light"
  }
]


function CoffeeList() {
  return (
    <React.Fragment>
    <hr />
    {mainCoffeeList.map((coffee, index) => 
      <Coffee
        name={coffee.name}
        origin={coffee.origin}
        price={coffee.price}
        roast={coffee.roast}
      />
    )}
    </React.Fragment>
  );
}

export default CoffeeList;