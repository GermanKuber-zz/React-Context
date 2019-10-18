import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { login as loginService } from "../../services/loginServices";
import { useHistory } from "react-router-dom";
var ClientOAuth2 = require("client-oauth2");
type LoginProps = {};
const Login: React.SFC<LoginProps> = props => {
  console.log(props);
  const { login, isLoggued } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  var meetupAuth = new ClientOAuth2({
    clientId: "443afqsa6fs1hr6h0u8i8b8sib",
    clientSecret: "t2bi61kgksc30sls7e29s04lr1",
    accessTokenUri: "https://secure.meetup.com/oauth2/access",
    authorizationUri: "https://secure.meetup.com/oauth2/authorize",
    redirectUri: "http://localhost:8080/login/meetup",
    scopes: ["basic"]
  });
  const handleLogin = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const user = loginService(email, password);
    login(user);
    history.push("/");
  };
  const handleLoginMeetup = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.oauth2Callback = function(uri) {
      alert("aaa");
      meetupAuth.token.getToken(uri).then(function(user) {
        console.log(user); //=> { accessToken: '...', tokenType: 'bearer', ... }

        // Make a request to the github API for the current user.
        return popsicle
          .request(
            user.sign({
              method: "get",
              url: "https://api.github.com/user"
            })
          )
          .then(function(res) {
            console.log(res); //=> { body: { ... }, status: 200, headers: { ... } }
          });
      });
    };

    // Open the page in a new window, then redirect back to a page that calls our global `oauth2Callback` function.
    window.open(meetupAuth.token.getUri());
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
