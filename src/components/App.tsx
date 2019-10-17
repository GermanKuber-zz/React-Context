import React, { useEffect, useState, MouseEvent } from "react";
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
import EditEvent from "./Admin/EditEvent/Index";
import Events from "./Admin/Events/Index";
import SyncEvent from "./Admin/SyncEvent/Index";
import { css } from "@emotion/core";
import LoadingOverlay from "react-loading-overlay";

export const App: React.SFC = () => {
  const override = css`
    display: block;
    width: 50%;
    left: 50%;
    top: 50%;
  `;
  useEffect(() => {}, []);
  const [loading, setLoading] = useState(false);

  const handleCancelEvent = (event: MouseEvent<HTMLButtonElement>) => {
    setLoading(!loading);
  };
  return (
    <>
      <Router history={historyRouter}>
        <Header></Header>
        <LoadingOverlay active={true} spinner text="Procesando...">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/organizers" component={Organizers} />
              <Route path="/organizers/:id(\d+)?" component={OrganizerDetail} />
              <Route path="/speaker/:id(\d+)?" component={SpeakerDetail} />
              <Route path="/sponsor/:id(\d+)?" component={Sponsor} />
              <PrivateRoute
                exact
                path="/admin/eventsToSync"
                component={EventsToSync}
              />
              <PrivateRoute exact path="/admin/events" component={Events} />
              <PrivateRoute
                exact
                path="/admin/events/:id(\d+)?/edit"
                component={EditEvent}
              />
              <PrivateRoute
                exact
                path="/admin/eventsToSync/:id/:platform/sync"
                component={SyncEvent}
              />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/panel" component={ControlPanel} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </LoadingOverlay>
      </Router>
      <Footer></Footer>
    </>
  );
};
