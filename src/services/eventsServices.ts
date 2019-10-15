import { Event } from "./models/Event";
import { EventToSync } from "./models/EventToSync";

export const getNextEvent = (): Promise<Event> => {
  return fetch("http://localhost:3000/events/1").then(x => x.json());
};
export const getEventsToSync = (): Promise<EventToSync[]> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
export const cancelEventsToSync = (
  event: EventToSync
): Promise<EventToSync> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
export const syncEventsToSync = (event: EventToSync): Promise<EventToSync> => {
  return fetch("http://localhost:3000/eventsToSync").then(x => x.json());
};
