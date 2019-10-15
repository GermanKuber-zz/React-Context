import React, { useState, useEffect } from "react";
import { getSpeakers } from "../../../services/speakersServices";
import { Speaker } from "../../../services/models/speaker";
import { NavLink } from "react-router-dom";

type HomeSpeakersProps = {};
const HomeSpeakers: React.SFC<HomeSpeakersProps> = () => {
  let speakersDefault: Speaker[] = [];
  const [speakers, setSpeakers] = useState(speakersDefault);
  useEffect(() => {
    getSpeakers().then(x => setSpeakers(x));
  }, []);
  return (
    <>
      <h2>Algunos de Nuestros Speakers</h2>
      <div className="row">
        {speakers.map(speaker => (
          <div key={speaker.id} className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src={speaker.picture} alt="" />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <NavLink
                    exact
                    className="btn btn-primary"
                    to={`/speaker/${speaker.id}`}
                  >
                    {speaker.name} - {speaker.lastName}
                  </NavLink>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus
                  sit, repellat sequi itaque deserunt, dolores in, nesciunt,
                  illum tempora ex quae? Nihil, dolorem!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSpeakers;
