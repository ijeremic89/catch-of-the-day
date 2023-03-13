import React, { Fragment } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes};

    // 2. Add a new fish
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fish object to state
    this.setState({fishes});
  };

  render() {
    return (
        <Fragment>
          <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood Market"/>
            </div>
            <Order></Order>
            <Inventory addFish={this.addFish}></Inventory>
          </div>
        </Fragment>
    );
  }
}

export default App;