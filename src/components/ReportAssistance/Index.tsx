import React from "react";
import { useHistory, RouteComponentProps, Route } from "react-router";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
type ReportAssistanceProps = {};

const ReportAssistance: React.SFC<
  RouteComponentProps<ReportAssistanceProps>
> = ({ match }) => {
  const history = useHistory();
  return (
    <>
      <h1>Report Assistence</h1>
      <QRCode value="asdasd90a8sd09as8d90asjdiasdja6sdta8sda!-asda.sdas" />
    </>
  );
};
export default ReportAssistance;
