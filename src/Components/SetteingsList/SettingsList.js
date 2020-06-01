import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SettingsList.css";

import ListItem from "Components/ListItem/ListItem";
import FeedBack from "Components/FeedBack/FeedBack";
function SettingsList({ setShowSettings, showSettings }) {
  const [settings] = useState([
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
    setShowFeedback(true);
  };

  return (
    <ul id="settings-list">
      <p className="settingText">Search setting</p>
      <p className="settingText">Advanced search</p>
      <p className="settingText">Your data in search</p>
      {settings.map((setting, index) => (
        <ListItem name={setting.name} target={setting.target} key={index} />
      ))}

      <li>
        <a href="#sendFeedback" onClick={handleShowFeedback}>
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
