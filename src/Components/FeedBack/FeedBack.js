import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FeedBack.css";
import Checkbox from "Components/Checkbox/Checkbox";

function FeedBack({ showFeedback, setShowFeedback }) {
  const [isChecKed, setIsChecked] = useState(true);
  const [checkboxBackground, setcheckboxBackground] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [showValidation, setShowValidation] = useState("none");
  const [textArea, setTextArea] = useState("");

  const handleChecked = () => {
    setIsChecked(!isChecKed);
    setcheckboxBackground("rgba(0, 0, 0, 0.12)");
  };

  const handleCancel = () => {
    setShowFeedback(!showFeedback);
  };

  const handleSubmit = evt => {
    setSubmitClicked(true);
    validate();
    evt.preventDefault();
  };
  const validate = () => {
    if (textArea === "") {
      setShowValidation("block");
      return false;
    } else {
      handleCancel();
    }
  };
  const handleText = evt => {
    setTextArea(evt.target.value);
    if (evt.target.value !== "") {
      setShowValidation("none");
    } else if (submitClicked) {
      setShowValidation("block");
    }
  };
  return (
    <div id="feedback">
      <form id="feedback-form" onSubmit={handleSubmit} name="feedback-form">
        <header>Send feedback</header>
        <textarea
          placeholder="Leave product feedback or share your ideas This isn't a way to contact support,as you typically won't receive a response."
          id="textArea"
          value={textArea}
          onChange={handleText}
        ></textarea>
        <span id="validation" style={{ display: showValidation }}>
          A description is required
        </span>
        <div id="Checkbox">
          <Checkbox
            handleChecked={handleChecked}
            isChecked={isChecKed}
            checkboxBackground={checkboxBackground}
          />
          {isChecKed && <canvas id="myCanvas"></canvas>}
        </div>
        <p>
          Go to the
          <a
            href="https://support.google.com/legal/answer/3110420?hl=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Legal Help page{" "}
          </a>
          to request content changes for legal reasons. Some
          <a href="#Account and System info">account and system information </a>
          may be sent to Google. We will use the information that you give us to
          help address technical issues and to improve our services, subject to
          our
          <a
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          and
          <a
            href="https://policies.google.com/terms?hl=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service.
          </a>
        </p>
        <div id="feedback-buttons">
          <button type="button" id="cancelbtn" onClick={handleCancel}>
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
FeedBack.propTypes = {
  showFeedback: PropTypes.bool,
  setShowFeedback: PropTypes.func
};
export default FeedBack;
