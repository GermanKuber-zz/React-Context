import React, { useState, MouseEvent } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { Sponsor } from "../../../services/models/sponsor";
import { newSponsor } from "../../../services/sponsorsServices";
import EditAllSponsor from "./EditAllSponsor";
export const NewSponsor: React.SFC<RouteComponentProps> = () => {
  const history = useHistory();

  const handleSaveSponsor = (sponsor: Sponsor) => {
    newSponsor(sponsor)
      .then(() => {
        history.push("/admin/panel");
      })
      .catch(() => {
        //mostrar error
      });
  };
  return (
    <>
      <EditAllSponsor saveSponsor={handleSaveSponsor}></EditAllSponsor>
    </>
  );
};
