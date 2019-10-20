import { UserDetail, UserToEdit } from "./models/User";

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

export const getAllUsersToEdit = (): Promise<UserToEdit[]> => {
  return fetch("http://localhost:3000/usersToEdit").then(x => x.json());
};

export const getUsersToEdit = (id: number): Promise<UserToEdit> => {
  return fetch(`http://localhost:3000/usersToEdit/${id}`).then(x => x.json());
};

export const deleteEditUser = (id: number): Promise<boolean> => {
  return fetch(`http://localhost:3000/usersToEdit/${id}`).then(x => x.json());
};

export const newUser = (user: UserToEdit): Promise<boolean> => {
  return fetch(`http://localhost:3000/usersToEdit/${id}`).then(x => x.json());
};
export const enableUser = (
  user: UserToEdit,
  enable: boolean
): Promise<boolean> => {
  return fetch(`http://localhost:3000/usersToEdit/`).then(x => x.json());
};
