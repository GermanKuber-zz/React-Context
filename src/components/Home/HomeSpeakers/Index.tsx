import React, { useState, useEffect } from "react";
import { getSpeakers, Speaker } from "../../../services/speakersServices";

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
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src={speaker.picture} alt="" />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">
                    {speaker.name} - {speaker.lastName}
                  </a>
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
