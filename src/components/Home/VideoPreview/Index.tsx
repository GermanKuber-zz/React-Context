import React from "react";

type VideoPreviewProps = {};
const VideoPreview: React.SFC<VideoPreviewProps> = () => {
  return (
    <>
      <section>
        <div id="lgx-video" className="lgx-video">
          <div className="lgx-inner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="lgx-video-title">Mira nuestro video 2019</h2>
                  <div className="lgx-video-area">
                    <figure>
                      <figcaption>
                        <div className="video-icon">
                          <div className="lgx-vertical">
                            <a
                              id="myModalLabel"
                              className="icon"
                              href="#"
                              data-toggle="modal"
                              data-target="#lgx-modal"
                            >
                              <i className="fa fa-play " aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                    <div id="lgx-modal" className="modal fade lgx-modal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              ×
                            </button>
                          </div>
                          <div className="modal-body">
                            <iframe
                              width="1280"
                              height="720"
                              src="https://www.youtube.com/embed/38818Yb9DVQ"
                              frameborder="0"
                              allowfullscreen
                            ></iframe>
                          </div>
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

export default VideoPreview;
