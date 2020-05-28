import React, { useState } from "react";

import AppsList from "../AppList/AppsList";
import GoogleAcc from "../GoogleAcc/GoogleAcc";

import "./Top.css";

function Top() {
  const [showApps, setShowApps] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const hideComponet = name => {
    switch (name) {
      case "showApps":
        setShowApps(!showApps);
        break;
      case "showAccount":
        setShowAccount(!showAccount);
        break;
    }
  };
  return (
    <div id="Top">
      <a href="https://mail.google.com/">Gmail</a>
      <a href="https://www.google.com.eg/imghp?hl=en&tab=wi&ogbl">Images</a>
      <a
        href="#"
        onClick={() => hideComponet("showApps")}
        title="Google Apps"
        id="apps"
      >
        <i id="icon" className="material-icons">
          apps
        </i>
      </a>
      {showApps && <AppsList />}
      <a
        href="#"
        title="Google Account:"
        onClick={() => hideComponet("showAccount")}
      >
        <i id="icon" className="fa fa-user-circle-o"></i>
      </a>
      {showAccount && <GoogleAcc />}
    </div>
  );
}

export default Top;
