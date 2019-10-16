import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./contexts/UserContext";
import { App } from "./components/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
