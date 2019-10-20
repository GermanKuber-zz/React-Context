import { UserDetailToSync } from "../UserDetailToSync";
export interface EventDetailToSync {
  id: string;
  title: string;
  description: string;
  platform: string;
  status: string;
  date: Date;
  attendees: UserDetailToSync[];
}

export interface EventToReportAssistance {
  id: string;
  title: string;
  description: string;
  platform: string;
  status: string;
  date: Date;
  tokenToReport: string;
}
