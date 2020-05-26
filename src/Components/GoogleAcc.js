import React, { Component } from "react";
import User from "./User";

export class GoogleAcc extends Component {
  render() {
    return (
      <div id="google-account">
        <User />
        <div id="section">
          <a
            id="add-account"
            href="https://accounts.google.com/AddSession/signinchooser?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession"
          >
            <i className="fa fa-user-plus"></i>
            <div id="txt">
              <h5>Add another account</h5>
            </div>
          </a>
        </div>
        <div id="signOut" className="btn">
          <a href="https://accounts.google.com/signout/chrome/landing?continue=https://www.google.com/&oc=https://www.google.com/&hl=en">
            Sign out
          </a>
        </div>
        <div id="policy">
          <div>
            <li id="privacy-item">
              <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
          </div>
          <li>
            <a href="https://policies.google.com/terms?hl=en" target="_blank">
              Terms of Service
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default GoogleAcc;
