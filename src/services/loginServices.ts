import { User } from "./models/User";

const defaultUser = <User>{
  email: "Algun@emagil.com",
  name: "Nombre",
  lastName: "Last Name",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjkxODlmZTQwLTZhZjEtNDMwNC1iZWQ0LTBiZjE3Mjc3MGFjYSIsImVtYWlsIjoicGVwZUBwZXBlLmNvbSIsImlhdCI6MTU3MTE3NTA5OSwiZXhwIjoxNTcxMTc4NzI4fQ.ojrSNf0JByr7WzsP4xas9HsaB0xSpSfC7-IT5w2Q-Ys"
};

export const login = (email: string, password: string): User => {
  return defaultUser;
};

export const loginWithMeetupToken = (token: string): Promise<User> => {
  return fetch("http://localhost:3000/events/1")
    .then(x => x.json())
    .then(x => defaultUser);
};
