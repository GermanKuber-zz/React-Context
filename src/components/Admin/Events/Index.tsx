import React, { useState, useEffect, MouseEvent } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { getMeEvents } from "../../../services/eventsServices";
import { MeEvent } from "../../../services/models/Event";
type EventsProps = {
  name: string;
};
type EventsParams = {
  id: number;
};
type EventsPropsAndRouter = EventsParams & EventsProps;
const Events: React.SFC<RouteComponentProps<EventsPropsAndRouter>> = props => {
  const [events, setEvents] = useState(new Array<MeEvent>());
  useEffect(() => {
    getMeEvents().then(s => {
      setEvents(s);
    });
  }, []);
  let history = useHistory();
  const handleEditEvent = (
    event: MouseEvent<HTMLButtonElement>,
    meEvent: MeEvent
  ) => {
    event.preventDefault();
    history.push(`/admin/events/${meEvent.id}/edit`);
  };

  return (
    <>
      {events && (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descrición</th>
              <th scope="col">Empresa</th>
              <th scope="col">Fecha</th>
              <th scope="col">Registrados</th>
              <th scope="col">Asistieron</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <th scope="row">{event.id}</th>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.company}</td>
                <td>{event.date}</td>
                <td>{event.registered}</td>
                <td>{event.attendees}</td>
                <td>
                  <button
                    type="button"
                    onClick={e => handleEditEvent(e, event)}
                    className="btn btn-primary"
                  >
                    Editar
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
export default Events;
