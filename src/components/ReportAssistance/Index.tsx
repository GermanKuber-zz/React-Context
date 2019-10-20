import React from "react";
import { useHistory, RouteComponentProps, Route } from "react-router";
import { Link } from "react-router-dom";
type ReportAssistanceProps = {};

const ReportAssistance: React.SFC<
  RouteComponentProps<ReportAssistanceProps>
> = ({ match }) => {
  const history = useHistory();
  return (
    <>
      <h1>Report Assistence</h1>
    </>
  );
};
export default ReportAssistance;
