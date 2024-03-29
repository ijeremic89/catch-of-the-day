import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    addFish: PropTypes.func
  }

  render() {
    return (
        <div className="inventory">
          <h2>Inventory</h2>
          {Object.keys(this.props.fishes).map(
              key => <EditFishForm fish={this.props.fishes[key]}
                                   key={key}
                                   index={key}
                                   updateFish={this.props.updateFish}
                                   deleteFish={this.props.deleteFish}/>
          )}
          <AddFishForm addFish={this.props.addFish}/>
          <button onClick={this.props.loadSampleFishes}>Load sample fishes
          </button>
        </div>
    );
  }
}

export default Inventory;
