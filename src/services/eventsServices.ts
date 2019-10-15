export const getNextEvent = (): Promise<Event> => {
  return fetch("http://localhost:3000/events/1").then(x => x.json());
};

export interface Event {
  id: string;
  title: string;
  address: string;
  description: string;
  date: string;
  picture: string;
}
