import React, { Fragment } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const {params} = this.props.match;
    //first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    })
  }

  componentDidUpdate() {
    localStorage.setItem(
        this.props.match.params.storeId,
        JSON.stringify(this.state.order)
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes};

    // 2. Add a new fish
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fish object to state
    this.setState({fishes});
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = {...this.state.fishes};
    // 2. Update state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({fishes: fishes})
  }

  deleteFish = (key) => {
    // 1. Take a copy of the current state
    const fishes = {...this.state.fishes};
    // 2. Update state
    fishes[key] = null;
    this.setState({fishes})
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = {...this.state.order}

    // 2. Either add to order or update the number in our order
    order[key] = order[key] + 1 || 1

    // 3. Call setState to update our state object
    this.setState({order});
  }

  removeFromOrder = (key) => {
    // 1. Take a copy of the current state
    const order = {...this.state.order};
    // 2. Update state
    delete order[key];
    this.setState({order})
  }

  render() {
    return (
        <Fragment>
          <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood Market"/>
              <ul className="fishes">
                {Object.keys(this.state.fishes).map(
                    key =>
                        <Fish key={key}
                              index={key}
                              details={this.state.fishes[key]}
                              addToOrder={this.addToOrder}/>)}
              </ul>
            </div>
            <Order
                fishes={this.state.fishes}
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}/>
            <Inventory
                addFish={this.addFish}
                updateFish={this.updateFish}
                deleteFish={this.deleteFish}
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}/>
          </div>
        </Fragment>
    );
  }
}

export default App;