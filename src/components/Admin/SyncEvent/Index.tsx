import React, { useState, useEffect, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getEventToSync } from "../../../services/eventsServices";
import {
  EventDetailToSync,
  UserDetailToSync
} from "../../../services/models/EventToSync";

type SyncEventProps = {
  name: string;
};
type SyncEventParams = {
  id: string;
  platform: string;
};

type SyncEventPropsAndRouter = SyncEventParams & SyncEventProps;
const SyncEvent: React.SFC<
  RouteComponentProps<SyncEventPropsAndRouter>
> = props => {
  const [event, setEvent] = useState({} as EventDetailToSync);
  const [users, setUsers] = useState(new Array<UserDetailToSync>());
  useEffect(() => {
    getEventToSync(props.match.params.id, props.match.params.platform).then(
      event => {
        setEvent(event);
        setUsers(event.attendees);
      }
    );
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
  const handleUserAttended = (
    eventInput: ChangeEvent<HTMLInputElement>,
    user: UserDetailToSync
  ) => {
    eventInput.preventDefault();

    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].attended = Boolean(eventInput.target.value);
    setUsers(usersToUpdate);
  };

  // const handleCancelEvent = (
  //   event: MouseEvent<HTMLButtonElement>,
  //   eventToSync: EventToSync
  // ) => {
  //   event.preventDefault();
  // };
  // const handleSyncEvent = (
  //   event: MouseEvent<HTMLButtonElement>,
  //   eventToSync: EventToSync
  // ) => {
  //   event.preventDefault();
  // };
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
                    <input
                      type="checkbox"
                      checked={user.attended}
                      onChange={evt => handleUserAttended(evt, user)}
                    />
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
export default SyncEvent;
