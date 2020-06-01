import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";
import Checked from "Assets/icons8-checked-checkbox-50.png";
import Unchecked from "Assets/icons8-unchecked-checkbox-50.png";

function Checkbox({ handleChecked, isChecked, checkboxBackground }) {
  const image = (
    <img
      id="checked-img"
      src={isChecked ? Checked : Unchecked}
      alt="Checkbox"
    />
  );

  return (
    <>
      <input
        type="checkbox"
        id="includeScreenshot"
        name="includeScreenshot"
        onClick={handleChecked}
      />
      <div
        id="customized-checkbox"
        style={{ backgroundColor: checkboxBackground }}
      >
        {image}
      </div>
      <label htmlFor="includeScreenshot">Include screenshot</label>
    </>
  );
}
Checkbox.propTypes = {
  handleChecked: PropTypes.func,
  isChecked: PropTypes.bool,
  checkboxBackground: PropTypes.string
};

export default Checkbox;
