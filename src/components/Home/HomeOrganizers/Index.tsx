import React, { useState, useEffect } from "react";
import { getOrganizers } from "../../../services/organizersServices";
import { NavLink } from "react-router-dom";
import { Speaker } from "../../../services/models/speaker";
import { SecureElement } from "../../../components/Auth/SecureElement";

type HomeOrganizersProps = {};
const HomeOrganizers: React.SFC<HomeOrganizersProps> = () => {
  let organizerDefault: Speaker[] = [];
  const [organizer, setOrganizers] = useState(organizerDefault);
  useEffect(() => {
    getOrganizers().then(x => setOrganizers(x));
  }, []);
  return (
    <SecureElement rol="admin">
      <>
        <h1 className="my-4">Organizadores</h1>
        <div className="row">
          {organizer.map(organizer => (
            <div key={organizer.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">
                  {organizer.name} - {organizer.lastName}
                </h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink
                    exact
                    className="btn btn-primary"
                    to={`/organizador/${organizer.id}`}
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </SecureElement>
  );
};

export default HomeOrganizers;
