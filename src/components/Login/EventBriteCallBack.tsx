import { RouteComponentProps, useLocation, useHistory } from "react-router";
import React, { useEffect, useContext } from "react";
import { loginWithMeetupToken } from "../../services/loginServices";
import { UserContext } from "../../contexts/UserContext";
import { User } from "services/models/User";
type EventBriteCallBackProps = {
  name: string;
};
type EventBriteCallBackParams = {
  id: number;
};
type EventBriteCallBackPropsAndRouter = EventBriteCallBackParams & EventBriteCallBackProps;
export const EventBriteCallBack: React.SFC<
  RouteComponentProps<EventBriteCallBackPropsAndRouter>
> = props => {
  const { login } = useContext(UserContext);
  let history = useHistory();
  let hash = useLocation().hash;
  const token = hash.slice(hash.indexOf("=") + 1, hash.indexOf("&"));
  useEffect(() => {
    loginWithMeetupToken(token)
      .then((user: User) => {
        login(user);
        history.push("/");
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};

export default EventBriteCallBack;
