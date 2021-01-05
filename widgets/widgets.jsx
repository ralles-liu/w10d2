import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";
import AutoComplete from './frontend/autocomplete';

// import Congrats from './congrats';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const tabs = [
    {title: "First Tab", content: "Does blue horseshoe love Anacot Steel?"},
    {title: "Second Tab", content: "This is the second tab."},
    {title: "Third Tab", content: "This is the third tab."}
  ];

  const names = [
    "Abba", "Barney", "Barbara", "Jeff", "Jenny"
  ];

  ReactDOM.render(
      <>
        <Clock/>
        <Tabs tabs={tabs}/>
        <Weather/>
        <AutoComplete names={names}/>
      </>
    , root);
});
