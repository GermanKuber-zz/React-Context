import React, { useContext } from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps
} from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  const { isLoggued } = useContext(UserContext);

  if (!component) {
    throw Error("component is undefined");
  }

  const Component = component; // JSX Elements have to be uppercase.
  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    if (isLoggued) {
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: "/login" }} />;
  };

  return <Route {...rest} render={render} />;
};
