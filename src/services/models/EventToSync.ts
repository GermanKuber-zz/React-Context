export interface EventToSync {
  id: string;
  title: string;
  status: string;
  date: Date;
  platform: string;
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
export interface EventDetailToSync {
  id: string;
  title: string;
  description: string;
  platform: string;
  status: string;
  date: Date;
  attendees: UserDetailToSync[];
}
export interface UserDetailToSync {
  id: string;
  name: string;
  lastName: string;
  email: string;
  attended: boolean;
  speaker: boolean;
  organizer: boolean;
}
