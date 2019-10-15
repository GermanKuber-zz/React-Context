export const getOrganizers = (): Promise<Speaker[]> => {
  return fetch("http://localhost:3000/organizers").then(x => x.json());
};

export type Speaker = {
  id: number;
  name: string;
  lastName: string;
  image: string;
};
