import { User } from "./models/User";
export const login = (email: string, password: string): User => {
  const user = <User>{
    email: email,
    name: "Nombre",
    lastName: "Last Name",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjkxODlmZTQwLTZhZjEtNDMwNC1iZWQ0LTBiZjE3Mjc3MGFjYSIsImVtYWlsIjoicGVwZUBwZXBlLmNvbSIsImlhdCI6MTU3MTE3NTA5OSwiZXhwIjoxNTcxMTc4NzI4fQ.ojrSNf0JByr7WzsP4xas9HsaB0xSpSfC7-IT5w2Q-Ys"
  };
  return user;
};
