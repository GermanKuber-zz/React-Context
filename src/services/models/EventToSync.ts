export interface EventToSync {
  id: string;
  title: string;
  source: string;
  status: string;
  date: Date;
}

export interface EventToEdit {
  id: string;
  title: string;
  source: string;
  status: string;
  date: Date;
  attendees: Assistant[];
}

export interface Assistant {
  id: number;
  email: string;
  name: string;
  lastName: string;
  attended: boolean;
  picture: string;
}
