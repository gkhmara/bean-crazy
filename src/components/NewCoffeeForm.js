import React from "react";
import { v4 } from 'uuid';

function NewCoffeeForm() {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.roast.value);
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

export default NewCoffeeForm;