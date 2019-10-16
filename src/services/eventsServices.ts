import { Event, MeEvent } from "./models/Event";
import { EventToSync, EventToEdit } from "./models/EventToSync";

export const getNextEvent = (): Promise<Event> => {
  return fetch("http://localhost:3000/events/1").then(x => x.json());
};
export const getMeEvents = (): Promise<MeEvent[]> => {
  return fetch("http://localhost:3000/meEvents").then(x => x.json());
};
export const getEventsToSync = (): Promise<EventToSync[]> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
export const getEventToEdit = (id: number): Promise<EventToEdit> => {
  return fetch(`http://localhost:3000/eventsDetail/${id}`).then(x => x.json());
};
export const cancelEventsToSync = (
  event: EventToSync
): Promise<EventToSync> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
export const syncEventsToSync = (event: EventToSync): Promise<EventToSync> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
