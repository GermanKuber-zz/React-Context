import React, { MouseEvent } from "react";
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
import LoadingOverlay from "react-loading-overlay";
import NewSponsor from "./Admin/Sponsors/NewSponsor/Index";
import SponsorsList from "./Admin/Sponsors/List/Index";
import EditSponsor from "./Admin/Sponsors/EditSponsor/Index";
import { AppState } from "../store";
import { loading, ready } from "../store/loading/actions";
import { connect } from "react-redux";
import { SyncEvent } from "./Admin/SyncEvent";

interface AppProps {
  isLoading: boolean;
  loading: () => void;
  ready: () => void;
}

export const App: React.SFC<AppProps> = props => {
  return (
    <>
      <Router history={historyRouter}>
        <Header></Header>
        <LoadingOverlay active={props.isLoading} spinner text="Procesando...">
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
              <PrivateRoute
                exact
                path="/admin/sponsors/new"
                component={NewSponsor}
              />
              <PrivateRoute
                exact
                path="/admin/sponsors/:id/edit"
                component={EditSponsor}
              />
              <PrivateRoute
                exact
                path="/admin/sponsors"
                component={SponsorsList}
              />

              <Route path="/login" component={Login} />
              <PrivateRoute path="/admin/panel" component={ControlPanel} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </LoadingOverlay>
      </Router>
      <Footer></Footer>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.loading.isLoading
});
const mapDispatchToProps = (dispatch: any) => ({
  loading: () => {
    dispatch(loading());
  },
  ready: () => {
    dispatch(ready());
  }
});

export const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
