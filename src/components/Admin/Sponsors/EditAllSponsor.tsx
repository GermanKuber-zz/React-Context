import React, { useState, MouseEvent } from "react";
import { Sponsor } from "../../../services/models/sponsor";
type EditAllSponsorProps = {
  id?: number;
  name?: string;
  description?: string;
  picture?: string;
  saveSponsor: (sponsor: Sponsor) => void;
};
const EditAllSponsor: React.SFC<EditAllSponsorProps> = ({
  saveSponsor,
  ...props
}) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [description, setDescription] = useState(
    props.description ? props.description : ""
  );
  const [picture, setPicture] = useState(props.picture ? props.picture : "");

  const handlesaveEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    saveSponsor({
      id: props.id,
      title: name,
      description: description,
      picture: picture
    } as Sponsor);
  };

  return (
    <>
      <h1>{name}</h1>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input
            onChange={e => setName(e.target.value)}
            className="form-control"
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={e => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Logo</label>
          <input
            onChange={e => setPicture(e.target.value)}
            className="form-control"
            value={picture}
          ></input>
        </div>
        <button onClick={handlesaveEvent} className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};
export default EditAllSponsor;
