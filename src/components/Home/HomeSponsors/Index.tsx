import React, { useState, useEffect } from "react";
import { getSponsors } from "../../../services/sponsorsServices";
import { NavLink } from "react-router-dom";
import { Sponsor } from "../../../services/models/sponsor";

type HomeSponsorsProps = {};
const HomeSponsors: React.SFC<HomeSponsorsProps> = () => {
  let sponsorsDefault: Sponsor[] = [];
  const [sponsors, setSponsors] = useState(sponsorsDefault);
  useEffect(() => {
    getSponsors().then(x => setSponsors(x));
  }, []);
  return (
    <>
      <section>
        <div id="lgx-sponsors" className="lgx-sponsors lgx-sponsors-black">
          <div className="lgx-inner-bg">
            <div className="lgx-inner">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="lgx-heading lgx-heading-white">
                      <h2 className="heading">Sponsonrs</h2>
                      <h3 className="subheading">
                        Gracias a todos nuestros sponsors que hacen posible cada
                        uno de nuestros eventos.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="sponsors-area sponsors-area-colorfull-border">
                      {sponsors.map(sponsor => (
                        <div className="single">
                          <NavLink
                            exact
                            className="btn btn-primary"
                            to={`/sponsor/${sponsor.id}`}
                          >
                            <img src={sponsor.picture} alt={sponsor.title} />
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="section-btn-area sponsor-btn-area">
                  <a className="lgx-btn" href="#">
                    Become A Sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSponsors;
