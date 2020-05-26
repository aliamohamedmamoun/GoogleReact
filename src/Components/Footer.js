import React, { Component } from "react";
import SettingsList from "./SettingsList";
import ListItem from "./ListItem";
import { useEffect, useState, useRef } from "react";

export class Footer extends Component {
  state = {
    list1: [
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
    ],
    list2: [
      { name: "Privacy", target: "https://policies.google.com/privacy?fg=1" },
      { name: "Terms", target: "https://policies.google.com/terms?fg=1" }
    ],
    showSettings: false
  };

  hideComponent() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  render() {
    /*   const ref = useRef();
    this.useOutsideClick(ref, this.handleClickOutside, this.state.showSettings); */
    return (
      <div id="footer">
        <p id="country">Egypt</p>

        <div id="options">
          <ul>
            {this.state.list1.map(item => (
              <ListItem name={item.name} target={item.target} key={item.name} />
            ))}
          </ul>
          <ul>
            {this.state.list2.map(item => (
              <ListItem name={item.name} target={item.target} key={item.name} />
            ))}
            <li>
              <a href="#" onClick={() => this.hideComponent()}>
                Settings
              </a>
            </li>

            {this.state.showSettings && (
              <SettingsList
                ref={node => {
                  this.node = node;
                }}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
