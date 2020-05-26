import React, { Component } from "react";
import ListItem from "./ListItem";
import FeedBack from "./FeedBack";
export class SettingsList extends Component {
  state = {
    settings: [
      { name: "Search setting", target: "" },
      { name: "Advanced search", target: "" },
      {
        name: "Your data in search",
        target:
          "https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1"
      },
      {
        name: " History",
        target:
          "https://myactivity.google.com/item?utm_source=google&hl=en-EG&fg=1&restrict=search"
      },
      {
        name: " Search help",
        target:
          "https://support.google.com/websearch/?visit_id=637232758047733395-3055146706&hl=en-EG&rd=2#topic=3378866"
      }
    ],
    showFeedback: false,
    submitClicked: false
  };

  handleCancel = () => {
    this.setState({ showFeedback: !this.state.showFeedback });
  };
  handleSubmit = () => {
    this.setState({ submitClicked: true });
    let x = document.getElementById("textArea").value;
    if (x === "") {
      document.getElementById("validation").style.display = "block";
      return false;
    } else {
      this.setState({ showFeedback: !this.state.showFeedback });
    }
  };
  handleText = () => {
    let x = document.getElementById("textArea").value;
    if (x !== "") {
      document.getElementById("validation").style.display = "none";
    } else if (this.state.submitClicked) {
      document.getElementById("validation").style.display = "block";
    }
  };

  render() {
    return (
      <ul id="settings-list">
        {this.state.settings.map(setting => (
          <ListItem
            name={setting.name}
            target={setting.target}
            key={setting.name}
          />
        ))}
        <li>
          <a href="#" onClick={() => this.setState({ showFeedback: true })}>
            Send feedback
          </a>
        </li>
        {this.state.showFeedback && (
          <FeedBack
            handleCancel={this.handleCancel}
            handleSubmit={this.handleSubmit}
            handleText={this.handleText}
          />
        )}
      </ul>
    );
  }
}

export default SettingsList;
