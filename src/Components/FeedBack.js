import React, { Component } from "react";
import Checkbox from "./Checkbox";

export class FeedBack extends Component {
  state = {
    isChecKed: true
  };
  handleChecked = () => {
    this.setState({ isChecKed: !this.state.isChecKed });
    document.getElementById("customized-checkbox").style.backgroundColor =
      "rgba(0, 0, 0, 0.12)";
  };
  render() {
    return (
      <div id="feedback">
        <form
          id="feedback-form"
          onSubmit={this.props.handleSubmit}
          name="feedback-form"
        >
          <header>Send feedback</header>
          <textarea
            placeholder="Leave product feedback or share your ideas This isn't a way to contact support,as you typically won't receive a response."
            id="textArea"
            onChange={this.props.handleText}
          ></textarea>
          <span id="validation">A description is required</span>
          <div id="Checkbox">
            <Checkbox
              handleChecked={this.handleChecked}
              isChecked={this.state.isChecKed}
            />
            {this.state.isChecKed && <canvas id="myCanvas"></canvas>}
          </div>
          <p>
            Go to the
            <a
              href="https://support.google.com/legal/answer/3110420?hl=en-GB"
              target="_blank"
            >
              Legal Help page{" "}
            </a>
            to request content changes for legal reasons. Some
            <a>account and system information </a>may be sent to Google. We will
            use the information that you give us to help address technical
            issues and to improve our services, subject to our
            <a href="https://policies.google.com/privacy?hl=en" target="_blank">
              Privacy Policy
            </a>
            and
            <a
              href="https://policies.google.com/terms?hl=en-GB"
              target="_blank"
            >
              Terms of Service.
            </a>
          </p>
          <div id="feedback-buttons">
            <button
              type="button"
              id="cancelbtn"
              onClick={this.props.handleCancel}
            >
              CANCEL
            </button>
            <button type="submit" id="sendbtn">
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedBack;
