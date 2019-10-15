export const getSpeakers = (count: number = 10): Promise<Speaker[]> => {
  return fetch("http://localhost:3000/speakers").then(x => x.json());
};

export interface Speaker {
  id: number;
  name: string;
  lastName: string;
  picture: string;
}
