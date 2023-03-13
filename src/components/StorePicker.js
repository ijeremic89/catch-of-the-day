import { Component, Fragment } from "react";

class StorePicker extends Component {
  render() {
    return (
        <Fragment>
          <h2>Hello, please Enter s store</h2>
          <form className="store-selector">
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit store -></button>
          </form>
        </Fragment>
    );
  }
}

export default StorePicker;