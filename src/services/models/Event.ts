export interface Event {
  id: string;
  title: string;
  address: string;
  description: string;
  date: string;
  picture: string;
}

export interface MeEvent {
  id: string;
  title: string;
  address: string;
  description: string;
  date: string;
  picture: string;
  attendees: number;
  registered: number;
  company: string;
}
