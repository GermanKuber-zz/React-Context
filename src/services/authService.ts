import { User } from "./models/User";
import JwtDecode from "jwt-decode";

const deaultUser = {
  email: "",
  name: "",
  lastName: "",
  token: ""
};
let currentUser: User = deaultUser;
let isLoggued = false;

export const getCurrentUser = (): User => {
  var value = localStorage.getItem("CurrentUser");
  if (value != null) {
    let user: User = JSON.parse(value);
    login(user);
    return user;
  }
  return currentUser;
};

export const isAuthenticated = (): boolean => {
  var value = localStorage.getItem("CurrentUser");
  if (value != null) {
    let user: User = JSON.parse(value);
    login(user);
    return true;
  }
  return false;
};
export const login = (user: User) => {
  localStorage.setItem("CurrentUser", JSON.stringify(user));
  localStorage.setItem("IsLoggued", "true");
  isLoggued = true;
  currentUser = user;
};
export const logout = () => {
  localStorage.removeItem("CurrentUser");
  localStorage.removeItem("IsLoggued");
  isLoggued = false;
  currentUser = deaultUser;
};
export const hasPermission = (rol: string): boolean => {
  if (!isLoggued) return false;
  const decodeToken = JwtDecode<JwtToken>(currentUser.token);
  return true;
};

type JwtToken = {
  admin: boolean;
  email: string;
  exp: number;
  iat: number;
  jti: string;
  name: string;
  sub: string;
};
