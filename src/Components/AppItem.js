import React from "react";

export default function AppItem(props) {
  return (
    <li>
      <a href={props.target}>
        <img src={props.icon} />
        <p>{props.name}</p>
      </a>
    </li>
  );
}
