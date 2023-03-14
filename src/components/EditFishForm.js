import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // Update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
        <div className="fish-edit">
          <input name="name"
                 value={this.props.fish.name}
                 type="text" onChange={this.handleChange}/>
          <input name="price"
                 value={this.props.fish.price}
                 type="text" onChange={this.handleChange}/>
          <select name="status"
                  value={this.props.fish.status} onChange={this.handleChange}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc"
                    value={this.props.fish.desc} onChange={this.handleChange}/>
          <input name="image"
                 value={this.props.fish.image}
                 type="text" onChange={this.handleChange}/>
        </div>
    );
  }
}

export default EditFishForm;