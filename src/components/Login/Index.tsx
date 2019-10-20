import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { login as loginService } from "../../services/loginServices";
import { useHistory } from "react-router-dom";
import { Config } from "../../services/config";

var ClientOAuth2 = require("client-oauth2");
type LoginProps = {};
const Login: React.SFC<LoginProps> = props => {
  console.log(props);
  const { login, isLoggued } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  var meetupAuth = new ClientOAuth2({
    clientId: Config.integrations.meetup.clientId,
    clientSecret: Config.integrations.meetup.clientSecret,
    accessTokenUri: Config.integrations.meetup.accessTokenUri,
    authorizationUri: Config.integrations.meetup.authorizationUri,
    redirectUri: Config.integrations.meetup.redirectUri,
    scopes: Config.integrations.meetup.scopes
  });
  const redirectUrl = history.location.search.slice(
    1,
    history.location.search.length
  );
  localStorage.setItem("RedirectUrl", redirectUrl);
  var eventBriteAuth = new ClientOAuth2({
    clientId: Config.integrations.eventBrite.clientId,
    redirectUri: Config.integrations.meetup.redirectUri
  });
  const handleLogin = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const user = loginService(email, password);
    login(user);
    history.push(history.location.search);
  };
  const handleLoginMeetup = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.open(meetupAuth.token.getUri());
  };
  const handleLoginEventBrite = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.open(
      `https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${Config.integrations.eventBrite.clientId}&redirect_uri=${Config.integrations.eventBrite.redirectUri}`
    );
  };
  return (
    <>
      <div className="wrapper fadeInDown">
        {!isLoggued && (
          <>
            <div id="formContent"></div>
            <div className="fadeIn first">
              <img
                src="http://danielzawadzki.com/codepen/01/icon.svg"
                id="icon"
                alt="User Icon"
              />
            </div>

            <form>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="Contraseña"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <input
                onClick={handleLogin}
                type="submit"
                className="fadeIn fourth"
                value="Log In"
              />
              <input
                onClick={handleLoginMeetup}
                type="submit"
                className="fadeIn fourth"
                value="Meetup"
              />
              <input
                onClick={handleLoginEventBrite}
                type="submit"
                className="fadeIn fourth"
                value="EventBrite"
              />
            </form>

            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
