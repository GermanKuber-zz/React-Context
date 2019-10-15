import { User } from "./models/User";

const deaultUser = {
  email: "",
  name: "",
  lastName: ""
};
let currentUser: User = deaultUser;
let isLoggued = false;

export const getCurrentUser = (): User => {
  return currentUser;
};

export const isAuthenticated = (): boolean => {
  return isLoggued;
};
export const login = (user: User) => {
  isLoggued = true;
  currentUser = user;
};
export const logout = () => {
  isLoggued = false;
  currentUser = deaultUser;
};
