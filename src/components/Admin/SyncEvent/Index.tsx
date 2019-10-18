import React, { useState, useEffect, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getEventToSync } from "../../../services/eventsServices";
import {
  EventDetailToSync,
  UserDetailToSync
} from "../../../services/models/EventToSync";
import { connect } from "react-redux";
import { ready, loading } from "../../../store/loading/actions";
import { getSponsors } from "../../../services/sponsorsServices";
import { Sponsor } from "../../../services/models/sponsor";
import Checkbox from "react-simple-checkbox";

type SyncEventProps = {
  name: string;
  loading: () => void;
  ready: () => void;
};
type SyncEventParams = {
  id: string;
  platform: string;
};

type SyncEventPropsAndRouter = SyncEventParams & SyncEventProps;
const SyncEventComponent: React.SFC<
  RouteComponentProps<SyncEventPropsAndRouter> & SyncEventProps
> = props => {
  const [event, setEvent] = useState({} as EventDetailToSync);
  const [users, setUsers] = useState(new Array<UserDetailToSync>());
  const [sponsors, setSponsors] = useState(new Array<Sponsor>());
  useEffect(() => {
    props.loading();
    getEventToSync(props.match.params.id, props.match.params.platform).then(
      event => {
        setEvent(event);
        setUsers(event.attendees);
        props.ready();
      }
    );
  }, []);
  useEffect(() => {
    getSponsors().then(sponsors => {
      setSponsors(sponsors);
    });
  }, []);
  const handleOnChangeTitle = (eventInput: ChangeEvent<HTMLInputElement>) => {
    eventInput.preventDefault();
    setEvent({ ...event, title: eventInput.target.value });
  };
  const handleOnChangeDescription = (
    eventInput: ChangeEvent<HTMLTextAreaElement>
  ) => {
    eventInput.preventDefault();
    setEvent({ ...event, description: eventInput.target.value });
  };
  const handleUserAttended = (selected: boolean, user: UserDetailToSync) => {
    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].attended = selected;
    setUsers(usersToUpdate);
  };
  const handleSponsor = (selected: boolean, sponsor: Sponsor) => {
    const updateIndex = sponsors.indexOf(sponsor);
    const sponsorToUpdate = sponsors.slice();
    sponsorToUpdate[updateIndex].selected = selected;
    setSponsors(sponsorToUpdate);
  };
  return (
    <>
      <form>
        <div className="form-group">
          <label>Titutlo De Evento</label>
          <input
            onChange={handleOnChangeTitle}
            className="form-control"
            id="exampleFormControlInput1"
            value={event.title}
          ></input>
        </div>
        <div className="form-group">
          <label>Plataforma</label>
          <input
            disabled
            className="form-control"
            id="exampleFormControlInput1"
            value={event.platform}
          ></input>
        </div>

        <div className="form-group">
          <label>Example textarea</label>
          <textarea
            onChange={handleOnChangeDescription}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            value={event.description}
          ></textarea>
        </div>
      </form>
      <>
        {users && (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Asistió</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Checkbox
                      checked={user.attended}
                      onChange={(i: boolean) => handleUserAttended(i, user)}
                    ></Checkbox>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {sponsors && (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Logo</th>
                <th scope="col">Colaboró</th>
              </tr>
            </thead>
            <tbody>
              {sponsors.map(sponsor => (
                <tr key={sponsor.id}>
                  <th scope="row">{sponsor.id}</th>
                  <td>{sponsor.title}</td>
                  <td>{sponsor.description}</td>
                  <td>
                    <img
                      className="sponsors-list-img"
                      src={sponsor.picture}
                    ></img>
                  </td>
                  <td>
                    <Checkbox
                      checked={sponsor.selected}
                      onChange={(i: boolean) => handleSponsor(i, sponsor)}
                    ></Checkbox>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button type="button" className="btn btn-success">
          Sincronizar
        </button>
      </>
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({
  loading: () => {
    dispatch(loading());
  },
  ready: () => {
    dispatch(ready());
  }
});

export const SyncEvent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncEventComponent);
