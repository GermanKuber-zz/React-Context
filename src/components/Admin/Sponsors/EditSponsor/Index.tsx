import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { Sponsor } from "../../../../services/models/sponsor";
import EditAllSponsor from "../EditAllSponsor";
import { saveSponsor, getSponsor } from "../../../../services/sponsorsServices";
type EditSponsorProps = {
  name: string;
};
type EditSponsorParams = {
  id: number;
};

type EditSponsorPropsAndRouter = EditSponsorParams & EditSponsorProps;
const EditSponsor: React.SFC<
  RouteComponentProps<EditSponsorPropsAndRouter>
> = props => {
  const history = useHistory();
  const [sponsor, setSponsor] = useState({} as Sponsor);
  useEffect(() => {
    getSponsor(props.match.params.id).then(event => {
      setSponsor(event);
    });
  }, []);
  const handleSaveSponsor = (sponsor: Sponsor) => {
    saveSponsor(sponsor)
      .then(() => {
        history.push("/panel");
      })
      .catch(() => {
        //mostrar error
      });
  };
  return (
    <>
      <EditAllSponsor
        id={sponsor.id}
        picture={sponsor.picture}
        name={sponsor.title}
        description={sponsor.description}
        saveSponsor={handleSaveSponsor}
      ></EditAllSponsor>
    </>
  );
};
export default EditSponsor;
