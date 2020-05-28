import React from "react";
import SettingsList from "../SetteingsList/SettingsList";
import ListItem from "../ListItem/ListItem";
import "./Footer.css";
//import { UseClickOutside } from "../../Hooks/useClickOutside";
import { useEffect, useState, useRef } from "react";

function Footer() {
  const [list1, setList1] = useState([
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

  const [list2, setList2] = useState([
    { name: "Privacy", target: "https://policies.google.com/privacy?fg=1" },
    { name: "Terms", target: "https://policies.google.com/terms?fg=1" }
  ]);
  //const { showSettings, setShowSettings, ref } = UseClickOutside(false);
  const [showSettings, setShowSettings] = useState(false);

  const hideComponent = () => {
    setShowSettings(!showSettings);
  };

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
          <li>
            <a href="#" onClick={() => hideComponent()}>
              Settings
            </a>
          </li>

          {showSettings && (
            <SettingsList
            //ref={ref}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
