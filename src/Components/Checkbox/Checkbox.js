import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";
import Checked from "../../Assets/icons8-checked-checkbox-50.png";
import Unchecked from "../../Assets/icons8-unchecked-checkbox-50.png";

function Checkbox({ handleChecked, isChecked }) {
  let image;
  if (isChecked === true) {
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
        onClick={handleChecked}
      />
      <div id="customized-checkbox">{image}</div>
      <label htmlFor="includeScreenshot">Include screenshot</label>
    </React.Fragment>
  );
}
Checkbox.propTypes = {
  handleChecked: PropTypes.func,
  isChecked: PropTypes.bool
};

export default Checkbox;
