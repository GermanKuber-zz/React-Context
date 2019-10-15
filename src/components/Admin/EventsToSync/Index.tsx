import React, { useState, useEffect, MouseEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  getEventsToSync,
  cancelEventsToSync,
  syncEventsToSync
} from "../../../services/eventsServices";
import { EventToSync } from "../../../services/models/EventToSync";

type EventsToSyncProps = {
  name: string;
};
type EventsToSyncParams = {
  id: number;
};

type EventsToSyncPropsAndRouter = EventsToSyncParams & EventsToSyncProps;
const EventsToSync: React.SFC<
  RouteComponentProps<EventsToSyncPropsAndRouter>
> = () => {
  const defaultEventsToSync = new Array<EventToSync>();
  const [eventsToSync, setEventoToSync] = useState(defaultEventsToSync);
  useEffect(() => {
    getEventsToSync().then(s => setEventoToSync(s));
  }, []);

  const handleCancelEvent = (
    event: MouseEvent<HTMLButtonElement>,
    eventToSync: EventToSync
  ) => {
    event.preventDefault();
    cancelEventsToSync(eventToSync);
  };
  const handleSyncEvent = (
    event: MouseEvent<HTMLButtonElement>,
    eventToSync: EventToSync
  ) => {
    event.preventDefault();
    syncEventsToSync(eventToSync);
  };
  return (
    <>
      {eventsToSync && (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Fuente</th>
              <th scope="col">Fecha</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {eventsToSync.map(event => (
              <tr key={event.id}>
                <th scope="row">{event.id}</th>
                <td>{event.title}</td>
                <td>{event.source}</td>
                <td>{event.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={e => handleSyncEvent(e, event)}
                    className="btn btn-success"
                  >
                    Sync
                  </button>
                  <button
                    type="button"
                    onClick={e => handleCancelEvent(e, event)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default EventsToSync;
