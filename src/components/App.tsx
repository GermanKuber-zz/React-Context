import React from "react";

import "../styles/index.css";
import Login from "./Login";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home/Index";
import historyRouter from "./router/Index";
import ControlPanel from "./controlPanel";
import Organizers from "./organizers";
import NotFound from "./notFound";
import Header from "./Header";
import Footer from "./Footer";
import Sponsor from "./Sponsor/Index";

export const App: React.SFC = () => {
  return (
    <>
      <Router history={historyRouter}>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/organizers/:id(\d+)?" component={Organizers} />
            <Route path="/sponsor/:id(\d+)?" component={Sponsor} />
            <Route path="/login" component={Login} />
            <Route path="/panel" component={ControlPanel} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
};
{
}
