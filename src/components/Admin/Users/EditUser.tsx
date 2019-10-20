import React, { MouseEvent, useState, useEffect, SyntheticEvent } from "react";
import { UserToEdit } from "../../../services/models/UserToEdit";
import { getUsersToEdit, deleteEditUser } from "../../../services/userServices";
import { RouteComponentProps, useHistory } from "react-router";
import { EditUserComponent } from "./components/EditUserComponent";
import { isEmpty } from "../../../services/objectsservices";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
type EditUserParams = {
  id: string;
};

export const EditUser: React.SFC<
  RouteComponentProps<EditUserParams>
> = props => {
  const [userToEdit, setUserToEdit] = useState({} as UserToEdit);
  const [sureToDelete, setSureToDelete] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getUsersToEdit(+props.match.params.id).then(u => {
      console.log(u);
      setUserToEdit(u);
    });
  }, []);
  const saveUser = (user: UserToEdit) => {
    console.log(user);
  };
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSureToDelete(true);
  };
  const confirmDelete = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    deleteEditUser(userToEdit.id).then(c => history.goBack());
  };
  const cancel = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSureToDelete(false);
  };
  return (
    <>
      <MDBContainer>
        <MDBModal isOpen={sureToDelete}>
          <MDBModalHeader>Eliminar Usuario</MDBModalHeader>
          <MDBModalBody>
            ¿Esta seguro que quiere eliminar al usuario{" "}
            <b>{userToEdit.email}</b>?
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn onClick={cancel} color="secondary">
              Cancelar
            </MDBBtn>
            <MDBBtn onClick={confirmDelete} color="danger">
              Eliminar
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      {!isEmpty(userToEdit) && (
        <EditUserComponent
          saveUser={saveUser}
          user={userToEdit}
        ></EditUserComponent>
      )}
      <button type="button" onClick={deleteUser} className="btn btn-danger">
        Eliminar
      </button>
    </>
  );
};
