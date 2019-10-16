import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getEventToEdit } from "../../../services/eventsServices";

type EditEventProps = {
  name: string;
};
type EditEventParams = {
  id: number;
};

type EditEventPropsAndRouter = EditEventParams & EditEventProps;
const EditEvent: React.SFC<
  RouteComponentProps<EditEventPropsAndRouter>
> = props => {
  const [eventToEdit, setEventToEdit] = useState();
  useEffect(() => {
    getEventToEdit(props.match.params.id).then(s => setEventToEdit(s));
  }, []);

  // const handleCancelEvent = (
  //   event: MouseEvent<HTMLButtonElement>,
  //   eventToSync: EventToSync
  // ) => {
  //   event.preventDefault();
  // };
  // const handleSyncEvent = (
  //   event: MouseEvent<HTMLButtonElement>,
  //   eventToSync: EventToSync
  // ) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <h1>aaa</h1>
    </>
  );
};
export default EditEvent;
