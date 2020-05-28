import React from "react";
import PropTypes from "prop-types";
import "./AppItem.css";

export default function AppItem({ target, icon, name }) {
  return (
    <li>
      <a href={target}>
        <img src={icon} />
        <p>{name}</p>
      </a>
    </li>
  );
}
AppItem.propTypes = {
  target: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string
};
