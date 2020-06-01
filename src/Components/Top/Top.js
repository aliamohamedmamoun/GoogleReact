import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import AppsList from "Components/AppList/AppsList";
import GoogleAcc from "Components/GoogleAcc/GoogleAcc";
import "./Top.css";

export default function Top() {
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
      default:
        break;
    }
  };
  const appRef = useRef(null);

  useClickAway(appRef, () => {
    setShowApps(false);
  });
  const accountRef = useRef(null);

  useClickAway(accountRef, () => {
    setShowAccount(false);
  });

  return (
    <div id="Top">
      <a href="https://mail.google.com/">Gmail</a>
      <a href="https://www.google.com.eg/imghp?hl=en&tab=wi&ogbl">Images</a>
      <div className="menu" ref={appRef}>
        <a
          href="#apps"
          onClick={() => hideComponet("showApps")}
          title="Google Apps"
          id="apps"
        >
          <i id="icon" className="material-icons">
            apps
          </i>
        </a>
        {showApps && <AppsList showApps={showApps} setShowApps={setShowApps} />}
      </div>
      <div className="menu" ref={accountRef}>
        <a
          href="#acc"
          title="Google Account:"
          onClick={() => hideComponet("showAccount")}
        >
          <i id="icon" className="fa fa-user-circle-o"></i>
        </a>
        {showAccount && (
          <GoogleAcc
            showAccount={showAccount}
            setShowAccount={setShowAccount}
          />
        )}
      </div>
    </div>
  );
}
