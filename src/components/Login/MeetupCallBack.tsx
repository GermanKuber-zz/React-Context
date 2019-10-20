import { RouteComponentProps, useLocation, useHistory } from "react-router";
import React, { useEffect, useContext } from "react";
import { loginWithMeetupToken } from "../../services/loginServices";
import { UserContext } from "../../contexts/UserContext";
import { User } from "services/models/User";
type MeetupCallBackProps = {
  name: string;
};
type MeetupCallBackParams = {
  id: number;
};
type MeetupCallBackPropsAndRouter = MeetupCallBackParams & MeetupCallBackProps;
export const MeetupCallBack: React.SFC<
  RouteComponentProps<MeetupCallBackPropsAndRouter>
> = props => {
  const { login } = useContext(UserContext);
  let history = useHistory();
  let hash = useLocation().hash;
  const token = hash.slice(hash.indexOf("=") + 1, hash.indexOf("&"));
  useEffect(() => {
    loginWithMeetupToken(token)
      .then((user: User) => {
        login(user);
        const redirectUrl = localStorage.getItem("RedirectUrl") as string;
        localStorage.setItem("RedirectUrl", "/");
        history.push(redirectUrl);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};

export default MeetupCallBack;
