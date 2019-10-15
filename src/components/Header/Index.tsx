import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { NavLink } from "react-router-dom";
import { Location } from "history";
import { match } from "react-router";
type HeaderProps = {};
export const Header: React.SFC<HeaderProps> = props => {
  const { user, isLoggued, logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
  };

  const handleIsActive = (match: match<any>, location: Location): boolean => {
    console.log(match, location);
    return (match as unknown) as boolean;
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink
            exact
            className="navbar-brand"
            activeClassName="active"
            to="/"
          >
            NET-Baires
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/organizers/1111"
                >
                  Organizadores
                </NavLink>
              </li>
              {!isLoggued ? (
                <li className="nav-item">
                  <NavLink
                    isActive={handleIsActive}
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/panel"
                    >
                      Panel de Control
                    </NavLink>
                  </li>{" "}
                  <li className="nav-item">
                    <a onClick={handleLogout} class="nav-link" href="#">
                      Desconectarse
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <header className="header-image "></header>
    </>
  );
};
export default Header;
