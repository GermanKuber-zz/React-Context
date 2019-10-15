import React, { useState, useEffect } from "react";
import { getNextEvent, Event } from "../../../services/eventsServices";

type NextEventProps = {};
const NextEvent: React.SFC<NextEventProps> = () => {
  let nextEventDefault: Event = {
    id: "",
    title: "",
    address: "",
    description: "",
    date: "",
    picture: ""
  };
  const [nextEvent, setNextEvent] = useState(nextEventDefault);
  useEffect(() => {
    getNextEvent().then(x => setNextEvent(x));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h2>{nextEvent.title}</h2>
          <p>{nextEvent.date}</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>{nextEvent.description}</p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src={nextEvent.picture} alt="" />
        </div>
      </div>
    </>
  );
};

export default NextEvent;
