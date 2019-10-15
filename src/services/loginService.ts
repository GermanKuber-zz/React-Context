import { User } from "contexts/UserContext";

export const login = (email: string, password: string): User => {
  return <User>{
    email: "Email@email.com",
    name: "Nombre",
    lastName: "Last Name"
  };
};
