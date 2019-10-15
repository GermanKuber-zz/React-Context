import { Sponsor } from "./models/sponsor";

export const getSponsors = (): Promise<Sponsor[]> => {
  return fetch("http://localhost:3000/sponsors").then(x => x.json());
};
export const getSponsor = (id: number): Promise<Sponsor> => {
  return fetch(`http://localhost:3000/sponsors/${id}`).then(x => x.json());
};
