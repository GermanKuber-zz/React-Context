import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const SecureElement: React.SFC = props => {
  const { isLoggued } = useContext(UserContext);

  if (isLoggued && props.children != null) {
    return <>{props.children}</>;
  }
  return <></>;
};
