import React, { useState, useEffect } from "react";
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
      <h1>aaa</h1>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="form-group">
          <label>Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Example multiple select</label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
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
                  <td>{user.attended}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    </>
  );
};
export default SyncEvent;
