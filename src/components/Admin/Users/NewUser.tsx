import React, { useState } from "react";
import { UserToEdit } from "../../../services/models/User";
import { newUser } from "../../../services/userServices";
import { useHistory } from "react-router";
import { EditUserComponent } from "./components/EditUserComponent";

export const NewUser: React.SFC = () => {
  const [userToEdit] = useState({} as UserToEdit);
  const history = useHistory();

  const saveUser = (user: UserToEdit) => {
    newUser(user).then(x => {
      history.goBack();
    });
  };

  return (
    <>
      <EditUserComponent
        saveUser={saveUser}
        user={userToEdit}
      ></EditUserComponent>
    </>
  );
};
