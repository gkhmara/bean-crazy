import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleSate = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <NewCoffeeForm />
    } else {
      currentlyVisibleSate = <CoffeeList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleSate}
      </React.Fragment>
    );
  }


}

export default CoffeeControl;