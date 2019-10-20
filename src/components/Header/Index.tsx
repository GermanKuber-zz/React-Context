import React, { useContext, useState, MouseEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { NavLink, useHistory, Link } from "react-router-dom";
import { Location } from "history";
import { match, Route } from "react-router";
import { slide as Menu } from "react-burger-menu";
import { SecureElement } from "../Auth/SecureElement";
import { BreadcrumbsComponent } from "./BreadcrumbsComponent";
type HeaderProps = {};
const Breadcrumbs = () => (
  <Route
    path="*"
    render={props => {
      let parts = props.location.pathname.split("/");
      const place = parts[parts.length - 1];
      parts = parts.slice(1, parts.length - 1);
      return (
        <p>
          {parts.map(crumb)}
          {place}
        </p>
      );
    }}
  />
);

const crumb = (part: any, partIndex: any, parts: any) => {
  const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
  return (
    <>
      <Link key={path} to={path}>
        {part}
      </Link>
      /
    </>
  );
};
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
            to="/admin/users"
          >
            <i className="fa fa-fw fa-mis-sync-o"></i>
            Lista de Usuarios
          </NavLink>
          <NavLink
            className="nav-link-slide-bar"
            activeClassName="active"
            to="/admin/users/new"
          >
            <i className="fa fa-fw fa-mis-sync-o"></i>
            Nuevo Usuario
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
      <div className="lgx-header-position lgx-header-position-white lgx-header-position-fixed  menu-onscroll">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark header-menu-dark ">
          <NavLink className="navbar-brand" activeClassName="active" to="/">
            <img
              class="logo-header"
              src="/assets/images/logo-header.png"
              alt="Logo"
            ></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                      isActive={handleIsActive}
                      className="nav-link"
                      activeClassName="active"
                      to="/profile"
                    >
                      Perfil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a onClick={handleLogout} className="nav-link" href="#">
                      Desconectarse
                    </a>
                  </li>
                </>
              )}
            </ul>
            <form className="form-inline">
              <div className="md-form my-0">
                <i class="fas fa-sign-in-alt"></i>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <BreadcrumbsComponent></BreadcrumbsComponent>
      <Breadcrumbs></Breadcrumbs>
    </>
  );
};
export default Header;
