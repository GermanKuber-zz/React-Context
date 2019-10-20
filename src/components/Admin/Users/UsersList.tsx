import React, { useState, useEffect, MouseEvent } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { UserToEdit } from "../../../services/models/User";
import { getAllUsersToEdit, enableUser } from "../../../services/userServices";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Checkbox from "react-simple-checkbox";

export const UsersList: React.SFC = () => {
  const [users, setUsers] = useState(new Array<UserToEdit>());
  const history = useHistory();
  useEffect(() => {
    getAllUsersToEdit().then(users => setUsers(users));
  }, []);
  const { SearchBar } = Search;
  const handleUserAttended = (isChecked: boolean, user: UserToEdit) => {
    const updateIndex = users.indexOf(user);
    const usersToUpdate = users.slice();
    usersToUpdate[updateIndex].enabled = isChecked;
    enableUser(user, isChecked).then(() => setUsers(usersToUpdate));
  };
  const columns = [
    {
      dataField: "id",
      text: "Id"
    },
    {
      dataField: "name",
      text: "Nombre"
    },
    {
      dataField: "lastName",
      text: "Apellido"
    },
    {
      dataField: "email",
      text: "Email"
    },
    {
      dataField: "enabled",
      text: "Activo",
      style: {
        textAlign: "center",
        height: "2px"
      },
      formatter: (_cellContent: any, user: UserToEdit) => (
        <Checkbox
          checked={user.enabled}
          onChange={(i: boolean) => handleUserAttended(i, user)}
        ></Checkbox>
      )
    },
    {
      text: "Eliminar",
      style: {
        textAlign: "center",
        height: "2px"
      },
      formatter: (_cellContent: any, user: UserToEdit) => (
        <button
          key={user.id}
          onClick={e => handleDelete(e, user)}
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      )
    },
    {
      text: "Editar",
      style: {
        textAlign: "center",
        height: "2px"
      },
      formatter: (_cellContent: any, user: UserToEdit) => (
        <button
          key={user.id}
          onClick={e => handleEdit(e, user)}
          type="button"
          className="btn btn-primary"
        >
          Editar
        </button>
      )
    }
  ];
  const handleDelete = (
    event: MouseEvent<HTMLButtonElement>,
    user: UserToEdit
  ) => {
    event.preventDefault();
  };
  const handleEdit = (
    event: MouseEvent<HTMLButtonElement>,
    user: UserToEdit
  ) => {
    event.preventDefault();
    history.push(`/admin/users/${user.id}/Edit`);
  };

  return (
    <>
      {users && (
        <div className="card border-primary mb-3">
          <div className="card-header">Usuarios</div>
          <div className="card-body">
            <ToolkitProvider
              keyField="id"
              data={users}
              columns={columns}
              search
            >
              {(props: any) => (
                <div>
                  <SearchBar {...props.searchProps} />
                  <hr />
                  <BootstrapTable
                    keyField="id"
                    {...props.baseProps}
                    pagination={paginationFactory()}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      )}
      <NavLink
        className="btn btn-success"
        activeClassName="active"
        to="/admin/users/new"
      >
        Nuevo Usuario
      </NavLink>
    </>
  );
};
