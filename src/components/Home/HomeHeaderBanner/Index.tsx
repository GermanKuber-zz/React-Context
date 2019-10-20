import React from "react";

type HomeHeaderBannerProps = {};
const HomeHeaderBanner: React.SFC<HomeHeaderBannerProps> = () => {
  return (
    <>
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
                      <h2 className="title">NET-Baires</h2>
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

export default HomeHeaderBanner;
