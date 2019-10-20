import React from "react";
import { useHistory, RouteComponentProps } from "react-router";
type BreadcrumbsProps = {};


export const BreadcrumbsComponent: React.SFC<
RouteComponentProps<BreadcrumbsProps>
> = ({match}) => {
  const history = useHistory();
  console.log(history);
  console.log(match);
  return (
    <>
      {history.location.pathname != "/" && (
        <section>
          
     
          <div className="lgx-banner lgx-banner-inner">
            <div className="lgx-page-inner">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="lgx-heading-area">
                      <div className="lgx-heading lgx-heading-white">
                        <h2 className="heading">Jonathon Doe</h2>
                      </div>
                      <ul className="breadcrumb">
                        <li>
                          <a href="index.html">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="speakers.html">Speakers</a>
                        </li>
                        <li className="active">Jonathon Doe</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
