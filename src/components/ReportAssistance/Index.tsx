import React, { useEffect, useState } from "react";
import { useHistory, RouteComponentProps, Route } from "react-router";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import { getEventToReportAssitance } from "../../services/eventsServices";
import { getCurrentUser } from "../../services/authService";
import { connect } from "react-redux";
import { loading, ready } from "../../store/loading/actions";

type ReportAssistanceProps = {
  loading: () => void;
  ready: () => void;
};
type ReportAssistanceParams = {
  id: number;
};

type ReportAssistancePropsAndRouter = ReportAssistanceParams &
  ReportAssistanceProps;
export const ReportAssistanceComponent: React.SFC<
  RouteComponentProps<ReportAssistancePropsAndRouter> & ReportAssistanceProps
> = ({ match, ...props }) => {
  const history = useHistory();
  const [qr, setQr] = useState("a");
  const [eventTitle, setEventTitle] = useState("a");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    props.loading();
    getEventToReportAssitance(match.params.id).then(x => {
      setQr(x.tokenToReport);
      setEventTitle(x.title);
      setLoaded(true);
      props.ready();
    });
  }, []);
  const user = getCurrentUser();
  return (
    <>
      <h1>Reportar Asistencia</h1>
      <h2>{eventTitle}</h2>
      <h3>{user.email}</h3>
      <h4>
        {user.name} {user.lastName}
      </h4>
      {loaded && <QRCode className="qrcore-wrapper" value={qr} />}
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({
  loading: () => {
    dispatch(loading());
  },
  ready: () => {
    dispatch(ready());
  }
});

export const ReportAssistance = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportAssistanceComponent);
