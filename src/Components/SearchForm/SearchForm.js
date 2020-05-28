import React, { useEffect } from "react";
import "./SearchForm.css";

import Google from "../../Assets/googlelogo_color_272x92dp.png";
import Mic from "../../Assets/83px-Google_mic.svg.png";

function SearchForm() {
  useEffect(() => {
    let f = document.getElementById("search").focus();
  });

  return (
    <div id="main">
      <img src={Google} />
      <div id="searchForm">
        <div id="search-bar" className="input">
          <i id="search-icon" className="fa fa-search"></i>
          <input type="text" id="search" fname="search" title="search" />

          <a href="#" id="mic-tooltip">
            <img id="mic" src={Mic} />
            <span className="tooltiptext">Search by voice</span>
          </a>
        </div>
        <div id="buttons">
          <button id="btn" type="button">
            Google Search
          </button>
          <button id="btn" type="button">
            I'm Feeling Lucky
          </button>
        </div>
        <div id="language">
          <label>Google offerd in : </label>
          <a href="#"> العربية</a>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
