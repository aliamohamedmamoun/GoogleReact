import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./SettingsList.css";

import { useClickAway } from "react-use";

import ListItem from "Components/ListItem/ListItem";
import FeedBack from "Components/FeedBack/FeedBack";
function SettingsList({ setShowSettings, showSettings }) {
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

  const handleShowFeedback = () => {
    //setShowSettings(!showSettings);
    setShowFeedback(true);
  };

  const wrapperRef = useRef(null);

  useClickAway(wrapperRef, () => {
    setShowSettings(!showSettings);
  });

  return (
    <ul id="settings-list" ref={wrapperRef}>
      {settings.map((setting, index) => (
        <ListItem name={setting.name} target={setting.target} key={index} />
      ))}

      <li>
        <a href="#" onClick={handleShowFeedback}>
          Send feedback
        </a>
      </li>

      {showFeedback && (
        <FeedBack
          showFeedback={showFeedback}
          setShowFeedback={setShowFeedback}
        />
      )}
    </ul>
  );
}
SettingsList.propTypes = {
  showSettings: PropTypes.bool,
  setShowSettings: PropTypes.func
};
export default SettingsList;
