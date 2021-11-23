import React from "react";
import ReactDOM from "react-dom";


import ContextV2A from "./ContextApiv2/ContextV2A";
import {
  UserContextv2,
  UserV2Provider,
} from "./ContextApiv2/Context/userContextv2";
import { ThemeV2Provider } from "./ContextApiv2/Context/themeContextV2";

ReactDOM.render(
  <React.StrictMode>
    <UserV2Provider value={"Ashwary"}>
      <ThemeV2Provider value="Light">
        <ContextV2A />
      </ThemeV2Provider>
    </UserV2Provider>
  </React.StrictMode>,
  document.getElementById("root")
);