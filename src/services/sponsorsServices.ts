export const getSponsors = (): Promise<Sponsor[]> => {
  return fetch("http://localhost:3000/sponsors").then(x => x.json());
};
export const getSponsor = (id: number): Promise<Sponsor> => {
  return fetch(`http://localhost:3000/sponsors/${id}`).then(x => x.json());
};

export interface Sponsor {
  id: number;
  title: string;
  description: string;
  picture: string;
}