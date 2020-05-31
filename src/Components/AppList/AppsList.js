import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";

import "./AppsList.css";

import Female from "Assets/icons8-female-profile-80.png";
import Google from "Assets/icons8-google-96 (1).png";
import Maps from "Assets/icons8-google-maps-96.png";
import YouTube from "Assets/icons8-play-button-96.png";
import Play from "Assets/icons8-google-play-96.png";
import Gmail from "Assets/icons8-gmail-96.png";
import Contacts from "Assets/512px-Google_Contacts_icon.svg.png";
import Drive from "Assets/icons8-google-drive-96.png";
import Calender from "Assets/icons8-google-calendar-96.png";
import Translate from "Assets/icons8-google-translate-96.png";
import Photos from "Assets/icons8-google-photos-96.png";
import Duo from "Assets/iconfinder_106-DUO_google_duo_4202005.png";
import Docs from "Assets/icons8-google-docs-96.png";
import Sheets from "Assets/icons8-google-sheets-96.png";
import Slides from "Assets/icons8-google-slides-96 (1).png";
import Blogger from "Assets/iconfinder_Blogger_2613269.png";
import Hangouts from "Assets/icons8-hangouts-96.png";
import Keep from "Assets/icons8-google-keep-96.png";
import Jamboard from "Assets/jamboard.png";
import Classroom from "Assets/icons8-google-classroom-96.png";
import Earth from "Assets/1024px-Google_Earth_icon.svg.png";
import Collections from "Assets/google-collections.svg";
import Art from "Assets/Arts-Culture.png";

import AppItem from "Components/AppItem/AppItem";

function AppsList({ showApps, setShowApps }) {
  const [list1, setList1] = useState([
    {
      name: "Account",
      target: "myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app",
      icon: Female
    },
    { name: "Search", target: "google.com.eg/webhp?tab=ww", icon: Google },
    {
      name: "Maps",
      target: "www.google.com.eg/maps?hl=en&tab=wl",
      icon: Maps
    },
    {
      name: "YouTube",
      target: "www.youtube.com/?gl=EG&tab=w1",
      icon: YouTube
    },
    {
      name: "Play",
      target: "play.google.com/store?hl=en&tab=w8",
      icon: Play
    },
    {
      name: "Gmail",
      target: "mail.google.com/mail/u/0/?tab=wm#inbox",
      icon: Gmail
    },
    {
      name: "Contacts",
      target: "contacts.google.com/?hl=en&tab=w",
      icon: Contacts
    },
    { name: "Drive", target: "drive.google.com/drive/my-drive", icon: Drive },
    {
      name: "Calender",
      target: "calendar.google.com/calendar/r?tab=wc&pli=1",
      icon: Calender
    },
    {
      name: "Translate",
      target: "translate.google.com.eg/?hl=en&tab=wT",
      icon: Translate
    },
    { name: "Photos", target: "photos.google.com/", icon: Photos },
    { name: "Duo", target: "duo.google.com/?usp=duo_ald", icon: Duo }
  ]);
  const [list2, setList2] = useState([
    {
      name: "Docs",
      target: "docs.google.com/document/u/0/?usp=docs_alc",
      icon: Docs
    },
    {
      name: "Sheets",
      target: "docs.google.com/spreadsheets/u/0/?usp=sheets_alc",
      icon: Sheets
    },
    {
      name: "Slides",
      target: "docs.google.com/presentation/u/0/",
      icon: Slides
    },
    {
      name: "Blogger",
      target: "www.blogger.com/about/?r=1-null_user",
      icon: Blogger
    },
    { name: "Hangouts", target: "hangouts.google.com/", icon: Hangouts },
    { name: "Keep", target: "keep.google.com/u/0", icon: Keep },
    { name: "Jamboard", target: "jamboard.google.com/", icon: Jamboard },
    { name: "Classroom", target: "classroom.google.com/h", icon: Classroom },
    { name: "Earth", target: "earth.google.com/web/", icon: Earth },
    {
      name: "Collections",
      target: "www.google.com.eg/save",
      icon: Collections
    }
  ]);
  const wrapperRef = useRef(null);

  useClickAway(wrapperRef, () => {
    setShowApps(!showApps);
  });

  return (
    <div id="apps-list" ref={wrapperRef}>
      <ul id="list1">
        {list1.map((item, index) => (
          <AppItem
            name={item.name}
            icon={item.icon}
            target={item.target}
            key={index}
          />
        ))}
      </ul>
      <ul id="list2">
        {list2.map((item, index) => (
          <AppItem
            name={item.name}
            icon={item.icon}
            target={item.target}
            key={index}
          />
        ))}
        <li id="artsAndCulture">
          <a href="artsandculture.google.com/?hl=en">
            <img src={Art} />
            <p>Arts and Culture</p>
          </a>
        </li>
      </ul>
      <div id="moreFromGoogle">
        <a href="https://about.google/intl/en/products/?tab=wh" target="_blank">
          More from Google
        </a>
      </div>
    </div>
  );
}
AppsList.propTypes = {
  showApps: PropTypes.bool,
  setShowApps: PropTypes.func
};
export default AppsList;
