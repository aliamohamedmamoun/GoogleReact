import React from "react";
import SettingsList from "Components/SetteingsList/SettingsList";
import ListItem from "Components/ListItem/ListItem";
import "./Footer.css";
import { useClickAway } from "react-use";
import { useState, useRef } from "react";

function Footer() {
  const [list1] = useState([
    {
      name: " Advertising",
      target:
        "https://ads.google.com/intl/en_eg/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
    },
    {
      name: "Bussiness",
      target:
        "https://ads.google.com/intl/en_eg/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
    },
    {
      name: "About",
      target:
        "https://ads.google.com/intl/en_eg/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
    },
    {
      name: "How Search Works",
      target: "https://www.google.com/search/howsearchworks/?fg=1"
    }
  ]);

  const [list2] = useState([
    { name: "Privacy", target: "https://policies.google.com/privacy?fg=1" },
    { name: "Terms", target: "https://policies.google.com/terms?fg=1" }
  ]);
  const [showSettings, setShowSettings] = useState(false);

  const wrapperRef = useRef(null);
  //UseClickOutside(showSettings, setShowSettings, wrapperRef);
  useClickAway(wrapperRef, () => {
    setShowSettings(false);
  });
  return (
    <div id="footer">
      <p id="country">Egypt</p>

      <div id="options">
        <ul>
          {list1.map((item, index) => (
            <ListItem name={item.name} target={item.target} key={index} />
          ))}
        </ul>
        <ul>
          {list2.map((item, index) => (
            <ListItem name={item.name} target={item.target} key={index} />
          ))}
          <div ref={wrapperRef} onClick={() => setShowSettings(!showSettings)}>
            <li>
              <a
                href="#Settings"
                onClick={() => setShowSettings(!showSettings)}
              >
                Settings
              </a>
            </li>
            {showSettings && (
              <SettingsList
                setShowSettings={setShowSettings}
                showSettings={showSettings}
              />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
