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
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <section>
        <div
          id="lgx-parallax-banner"
          className="lgx-banner lgx-banner-parallax"
        >
          <div className="lgx-section">
            <div id="layer-wrapper" className="lgx-item-parallax-banner">
              <div className="banner-content">
                <div className="lgx-hover-link">
                  <div className="lgx-vertical">
                    <div className="lgx-banner-info lgx-banner-info-center">
                      <div className="lgx-countdown-area">
                        <div id="lgx-countdown" data-date="2019/12/15"></div>
                      </div>
                      <h2 className="title">
                        Conference{" "}
                        <span>
                          <b>2</b>
                          <b>0</b>
                          <b>1</b>
                          <b>9</b>
                        </span>
                      </h2>
                      <h3 className="location">
                        <i className="fa fa-map-marker"></i> 21 King Street,
                        Dhaka 1205, Bangladesh.
                      </h3>
                      <h3 className="date">
                        <i className="fa fa-calendar"></i> 23-27 September, 2018
                      </h3>
                      <div className="action-area">
                        <div className="lgx-video-area">
                          <a className="lgx-btn lgx-btn-red" href="#">
                            Buy Ticket Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
