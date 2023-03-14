import React, { Fragment } from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submiting
    event.preventDefault();

    // 2. Get the text from the input
    const storeName = this.myInput.current.value;

    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
        <Fragment>
          <h2>Hello, please Enter s store</h2>
          <form className="store-selector"
                onSubmit={this.goToStore}>
            <input type="text"
                   ref={this.myInput}
                   required
                   placeholder="Store Name"
                   defaultValue={getFunName()}/>
            <button type="submit"
                    onClick={this.handleClick}>Visit store ->
            </button>
          </form>
        </Fragment>
    );
  }
}

export default StorePicker;