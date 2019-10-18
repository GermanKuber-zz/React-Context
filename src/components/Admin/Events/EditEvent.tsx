import React, { useState, useEffect, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getEventToEdit } from "../../../services/eventsServices";
import {
  EventDetailToSync,
  UserDetailToSync
} from "../../../services/models/EventToSync";
import Checkbox from "react-simple-checkbox";
import { getSponsors } from "../../../services/sponsorsServices";
import { Sponsor } from "services/models/sponsor";
type EditEventProps = {
  name: string;
};
type EditEventParams = {
  id: number;
};

type EditEventPropsAndRouter = EditEventParams & EditEventProps;
export const EditEvent: React.SFC<
  RouteComponentProps<EditEventPropsAndRouter>
> = props => {
  const [event, setEvent] = useState({} as EventDetailToSync);
  const [sponsors, setSponsors] = useState(new Array<SponsorToEvent>());
  const [users, setUsers] = useState(new Array<UserDetailToSync>());

  useEffect(() => {
    getEventToEdit(props.match.params.id).then(event => {
      setEvent(event);
      setUsers(event.attendees);
    });
  }, []);
  useEffect(() => {
    getSponsors().then(sponsors => {
      let sponsorToColaborte: SponsorToEvent[] = sponsors.map(
        x => new SponsorToEvent(x)
      );
      setSponsors(sponsorToColaborte);
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
  const handleUserAttended = (isChecked: boolean, user: UserDetailToSync) => {
    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].attended = isChecked;
    setUsers(usersToUpdate);
  };
  const handleUserSpeaker = (isChecked: boolean, user: UserDetailToSync) => {
    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].speaker = isChecked;
    setUsers(usersToUpdate);
  };
  const handleUserOrganizer = (isChecked: boolean, user: UserDetailToSync) => {
    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].organizer = isChecked;
    setUsers(usersToUpdate);
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
        <h2>Asistentes</h2>
        {users && (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Asistió</th>
                <th scope="col">Speaker</th>
                <th scope="col">Organizador</th>
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
                  <td>
                    <Checkbox
                      checked={user.speaker}
                      onChange={(i: boolean) => handleUserSpeaker(i, user)}
                    ></Checkbox>
                  </td>
                  <td>
                    <Checkbox
                      checked={user.organizer}
                      onChange={(i: boolean) => handleUserOrganizer(i, user)}
                    ></Checkbox>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h2>Sponsors</h2>
        {sponsors && (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Logo</th>
                <th scope="col">Colaboró con</th>
                <th scope="col">Colaboró</th>
              </tr>
            </thead>
            <tbody>
              {sponsors.map(sponsor => (
                <tr key={sponsor.id}>
                  <th scope="row">{sponsor.id}</th>
                  <td>{sponsor.title}</td>
                  <td>
                    <img
                      className="sponsors-list-img"
                      src={sponsor.picture}
                    ></img>
                  </td>
                  <td>
                    <textarea
                      class="form-control"
                      value={sponsor.description}
                      rows={4}
                    ></textarea>
                  </td>

                  <td>
                    <Checkbox></Checkbox>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button type="button" className="btn btn-success">
          Guardar
        </button>
      </>
    </>
  );
};

class SponsorToEvent {
  id: number = 0;
  title: string = "";
  picture: string = "";
  colaboratedWith: string = "";
  colaborated: boolean = false;
  constructor(sponsor: Sponsor) {
    this.id = sponsor.id;
    this.title = sponsor.title;
    this.picture = sponsor.picture;
  }
}
