import React from "react";
import "./User.css";
import Female from "Assets/icons8-female-profile-80.png";
export default function User() {
  return (
    <div id="user">
      <img id="profile-pic" src={Female} alt="profilePicture" />
      <a href="#camera">
        <span id="camera" className="fa-stack fa-lg">
          <i id="cam" className="fa fa-camera fa-stack-1x"></i>
          <i id="circle" className="fa fa-circle-thin fa-stack-2x"></i>{" "}
        </span>
      </a>
      <h4>Alia Maamoun</h4>
      <p>aliama2moun1996@gmail.com</p>
      <div id="manageYourAccount">
        <a href="https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act">
          Manage your Google Account
        </a>
      </div>
    </div>
  );
}
