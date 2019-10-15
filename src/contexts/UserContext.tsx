import React, { Context, useState } from "react";
import { User } from "../services/models/User";
type UserContext = {
  user: User;
  isLoggued: boolean;
  login: (user: User) => void;
  logout: () => void;
};
type UserContextProps = {};

let UserContext: Context<UserContext>;

const defaultUser = () => {
  return {
    email: "",
    name: "",
    lastName: ""
  };
};
const { Provider, Consumer } = (UserContext = React.createContext<UserContext>({
  user: defaultUser(),
  isLoggued: false,
  login: () => {},
  logout: () => {}
}));

const UserProvider: React.SFC<UserContextProps> = props => {
  const [user, setUser] = useState(defaultUser());
  const [isLoggued, setLoggued] = useState(false);

  const loginHandler = (user: User) => {
    setLoggued(true);
    setUser(user);
  };

  const logoutHandler = () => {
    setLoggued(false);
    setUser(defaultUser());
  };
  return (
    <Provider
      value={{
        user: user,
        isLoggued: isLoggued,
        login: loginHandler,
        logout: logoutHandler
      }}
    >
      {props.children}
    </Provider>
  );
};
export { UserProvider, Consumer as UserConsumer, UserContext };
