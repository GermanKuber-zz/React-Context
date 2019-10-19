import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import QrReader from "react-qr-scanner";
import { hasAny } from "../../../services/objectsservices";

type EventLiveProps = {
  name: string;
};
type EventLiveParams = {
  id: number;
};
type EventLivePropsAndRouter = EventLiveParams & EventLiveProps;
export const EventLive: React.SFC<
  RouteComponentProps<EventLivePropsAndRouter>
> = () => {
  const [attended, setAttended] = useState(new Array<string>());
  const [showReader, setShowReader] = useState(true);
  const handleScan = (data: any) => {
    if (data) {
      setShowReader(false);

      setTimeout(() => {
        setShowReader(true);
      }, 1000);
      var newArry = [...attended, data];
      setAttended(newArry);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };
  const previewStyle = {
    height: 400,
    width: 400
  };
  return (
    <>
      <div className="card border-primary mb-3 qr-panel">
        <div className="card-header">Lector</div>
        <div className="card-body">
          {showReader && (
            <QrReader
              delay={100}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
          )}
        </div>
      </div>

      {hasAny(attended) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {attended.map(x => {
              <tr key={x}>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
