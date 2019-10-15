import React, { useState, useEffect } from "react";
import { Sponsor, getSponsors } from "../../../services/sponsorsServices";
import { NavLink } from "react-router-dom";

type HomeSponsorsProps = {};
const HomeSponsors: React.SFC<HomeSponsorsProps> = () => {
  let sponsorsDefault: Sponsor[] = [];
  const [sponsors, setSponsors] = useState(sponsorsDefault);
  useEffect(() => {
    getSponsors().then(x => setSponsors(x));
  }, []);
  return (
    <>
      <h1 className="my-4">Sponsors</h1>
      <div className="row">
        {sponsors.map(sponsor => (
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h4 className="card-header">{sponsor.title}</h4>
              <div className="card-body">
                <p className="card-text">{sponsor.description}</p>
              </div>
              <div className="card-footer">
                <NavLink
                  exact
                  className="btn btn-primary"
                  to={`/sponsor/${sponsor.id}`}
                >
                  Conocer más
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSponsors;
