import React, { Component } from "react";
import AppsList from "./AppsList";
import GoogleAcc from "./GoogleAcc";

export class Top extends Component {
  constructor() {
    super();
    this.state = {
      showApps: false,
      showAccount: false
    };
    this.hideComponet = this.hideComponet.bind(this);
  }
  hideComponet(name) {
    console.log(name);
    switch (name) {
      case "showApps":
        this.setState({ showApps: !this.state.showApps });
        break;
      case "showAccount":
        this.setState({ showAccount: !this.state.showAccount });
        break;
    }
  }

  render() {
    const { showApps, showAccount } = this.state;
    return (
      <div id="Top">
        <a href="https://mail.google.com/">Gmail</a>
        <a href="https://www.google.com.eg/imghp?hl=en&tab=wi&ogbl">Images</a>
        <a
          href="#"
          onClick={() => this.hideComponet("showApps")}
          title="Google Apps"
          id="apps"
        >
          <i id="icon" className="material-icons">
            apps
          </i>
        </a>
        {showApps && <AppsList />}
        <a
          href="#"
          title="Google Account:"
          onClick={() => this.hideComponet("showAccount")}
        >
          <i id="icon" className="fa fa-user-circle-o"></i>
        </a>
        {showAccount && <GoogleAcc />}
      </div>
    );
  }
}

export default Top;
