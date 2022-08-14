import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.location.value,
      price: event.target.location.value,
      roast: event.target.location.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' />
        <input
          type='text'
          name='price'
          placeholder='Coffee Price' />
        <input 
          type='text'
          name='roast'
          placeholder='Coffee Roast'/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;