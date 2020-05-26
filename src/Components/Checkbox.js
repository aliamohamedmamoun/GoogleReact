import React, { Component } from "react";
import Checked from "./Assets/icons8-checked-checkbox-50.png";
import Unchecked from "./Assets/icons8-unchecked-checkbox-50.png";

export class Checkbox extends Component {
  render() {
    let image;
    if (this.props.isChecked === true) {
      image = <img id="checked-img" src={Checked} />;
    } else {
      image = <img id="checked-img" src={Unchecked} />;
    }
    return (
      <React.Fragment>
        <input
          type="checkbox"
          id="includeScreenshot"
          name="includeScreenshot"
          onClick={this.props.handleChecked}
        />
        <div id="customized-checkbox">{image}</div>
        <label htmlFor="includeScreenshot">Include screenshot</label>
      </React.Fragment>
    );
  }
}

export default Checkbox;
