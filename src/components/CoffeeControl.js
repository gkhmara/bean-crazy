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

  handleClick = () => {
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentlyVisibleSate = null;
    let addCoffeeButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <NewCoffeeForm />
    } else {
      currentlyVisibleSate = <CoffeeList />
      addCoffeeButton = <button onClick={this.handleClick}>Add Coffee</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleSate}
        {addCoffeeButton}
      </React.Fragment>
    );
  }


}

export default CoffeeControl;