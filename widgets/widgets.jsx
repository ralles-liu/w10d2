import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from "./frontend/tabs";

// import Congrats from './congrats';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const tabs = [
    {title: "First Tab", content: "Does blue horseshoe love Anacot Steel?"},
    {title: "Second Tab", content: "This is the second tab."},
    {title: "Third Tab", content: "This is the third tab."}
  ];

  ReactDOM.render(
      <>
        <Clock/>
        <Tabs tabs={tabs}/>
      </>
    , root);
});
