import { UserDetail } from "./models/User";

export const getUserProfile = (id: number = 10): Promise<UserDetail> => {
  return fetch("http://localhost:3000/speakers").then(x => {
    return {
      id: 1,
      email: "",
      name: "",
      lastName: "",
      linkedin: "",
      twitter: "",
      github: "",
      instagram: "",
      biography: ""
    };
  });
};
