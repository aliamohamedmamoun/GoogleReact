import React from "react";

export default function ListItem(props) {
  if (props.target === "") {
    return <li>{props.name}</li>;
  } else {
    return (
      <li>
        <a href={props.target}>{props.name}</a>
      </li>
    );
  }
}
