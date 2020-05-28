import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

export default function ListItem({ target, name }) {
  if (target === "") {
    return <li>{name}</li>;
  } else {
    return (
      <li>
        <a href={target}>{name}</a>
      </li>
    );
  }
}
ListItem.propTypes = {
  target: PropTypes.string,
  name: PropTypes.string
};
