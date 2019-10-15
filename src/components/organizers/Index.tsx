import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

type OrganizersProps = {
  name: string;
};
type OrganizersParams = {
  id: number;
};

type OrganizersPropsAndRouter = OrganizersParams & OrganizersProps;
const Organizers: React.SFC<
  RouteComponentProps<OrganizersPropsAndRouter>
> = props => {
  const { id } = useParams();
  return (
    <>
      <h1>Organizers - {id}</h1>
    </>
  );
};
export default Organizers;
