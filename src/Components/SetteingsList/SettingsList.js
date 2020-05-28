import React, { useState, useRef, useEffect } from "react";
import "./SettingsList.css";

import ListItem from "../ListItem/ListItem";
import FeedBack from "../FeedBack/FeedBack";
function SettingsList() {
  const [settings, setSettings] = useState([
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
  ]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleCancel = () => {
    setShowFeedback(!showFeedback);
  };
  const handleSubmit = () => {
    setSubmitClicked(true);
    let x = document.getElementById("textArea").value;
    if (x === "") {
      document.getElementById("validation").style.display = "block";
      return false;
    } else {
      setShowFeedback(!showFeedback);
    }
  };

  const handleText = () => {
    let x = document.getElementById("textArea").value;
    if (x !== "") {
      document.getElementById("validation").style.display = "none";
    } else if (submitClicked) {
      document.getElementById("validation").style.display = "block";
    }
  };

  return (
    <ul id="settings-list">
      {settings.map((setting, index) => (
        <ListItem name={setting.name} target={setting.target} key={index} />
      ))}

      <li>
        <a href="#" onClick={() => setShowFeedback(true)}>
          Send feedback
        </a>
      </li>

      {showFeedback && (
        <FeedBack
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          handleText={handleText}
        />
      )}
    </ul>
  );
}

export default SettingsList;
