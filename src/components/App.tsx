import React, { useEffect } from "react";
import "../styles/index.css";
import Login from "./Login";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home/Index";
import historyRouter from "./router/HistoryRouter";
import Organizers from "./organizers";
import NotFound from "./notFound";
import Header from "./Header";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import SpeakerDetail from "./SpeakerDetail";
import OrganizerDetail from "./OrganizerDetail";
import EventsToSync from "./Admin/EventsToSync";
import ControlPanel from "./Admin/controlPanel";
import { PrivateRoute } from "./router/PrivateRoute";
export const App: React.SFC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Router history={historyRouter}>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/organizers" component={Organizers} />
            <Route path="/organizers/:id(\d+)?" component={OrganizerDetail} />
            <Route path="/speaker/:id(\d+)?" component={SpeakerDetail} />
            <Route path="/sponsor/:id(\d+)?" component={Sponsor} />
            <PrivateRoute path="/admin/eventsToSync" component={EventsToSync} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/panel" component={ControlPanel} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
};
