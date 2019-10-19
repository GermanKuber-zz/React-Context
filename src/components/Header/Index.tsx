import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { NavLink, useHistory } from "react-router-dom";
import { Location } from "history";
import { match } from "react-router";
import { slide as Menu } from "react-burger-menu";
import { SecureElement } from "../Auth/SecureElement";
type HeaderProps = {};
export const Header: React.SFC<HeaderProps> = props => {
  const { user, isLoggued, logout } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  let history = useHistory();

  const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
    logout();
    history.push("/");
    history.listen;
  };
  const handleClickMenuAdmin = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
  };
  const handleIsActive = (match: match<any>, location: Location): boolean => {
    return (match as unknown) as boolean;
  };
  return (
    <>
      <SecureElement rol="admin">
        <Menu isOpen={open}>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/events"
          >
            <i className="fa fa-fw fa-mis-eventos-o"></i>
            Mis Eventos
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/eventsToSync"
          >
            <i className="fa fa-fw fa-mis-sync-o"></i>
            Eventos para Syncronizar
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/sponsors"
          >
            <i className="fa fa-fw fa-panel-o"></i>
            Sponsors
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/sponsors/new"
          >
            <i className="fa fa-fw fa-mis-eventos-o"></i>
            Nuevo Sponsor
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/EventLive"
          >
            <i className="fa fa-fw fa-mis-eventos-o"></i>
            Evento en Vivo
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/panel"
          >
            <i className="fa fa-fw fa-panel-o"></i>
            Panel de Control
          </NavLink>
        </Menu>
      </SecureElement>
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
                    <a onClick={handleLogout} className="nav-link" href="#">
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
