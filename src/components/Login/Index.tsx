import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { login as loginService } from "../../services/loginService";
import { useHistory } from "react-router-dom";

type LoginProps = {};
const Login: React.SFC<LoginProps> = props => {
  const { login, isLoggued } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const user = loginService(email, password);

    login(user);
    history.push("/");
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
