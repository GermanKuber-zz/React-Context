import React, { useState, useEffect } from "react";
import { Speaker } from "../../../services/speakersServices";
import { getOrganizers } from "../../../services/organizersServices";

type HomeOrganizersProps = {};
const HomeOrganizers: React.SFC<HomeOrganizersProps> = () => {
  let organizerDefault: Speaker[] = [];
  const [organizer, setOrganizers] = useState(organizerDefault);
  useEffect(() => {
    getOrganizers().then(x => setOrganizers(x));
  }, []);
  return (
    <>
      <h1 className="my-4">Organizadores</h1>
      <div className="row">
        {organizer.map(organizer => (
          <div className="col-lg-4 mb-4">
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
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeOrganizers;
