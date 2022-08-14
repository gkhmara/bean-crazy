import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleSate = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <NewCoffeeForm />;
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleSate = <CoffeeList coffeeList={this.state.mainCoffeeList} />
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleSate}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }


}

export default CoffeeControl;