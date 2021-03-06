import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { UserDetailToSync } from "../../../services/models/UserDetailToSync";
type SelectSponsorProps = {
  users: UserDetailToSync[];
  selectAttended: (ids: number[]) => void;
};

export const SelectUsersAttended: React.SFC<SelectSponsorProps> = ({
  selectAttended,
  ...props
}) => {
  const [users] = useState(props.users);
  const [usersSelected, setUsersSelected] = useState(new Array<number>());
  const { SearchBar } = Search;

  const columns = [
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
    }
  ];

  const handleOnSelect = (row: any, isSelect: any) => {
    let ids = new Array<number>();
    if (isSelect) {
      ids = [...usersSelected, row.id];
      setUsersSelected(ids);
    } else {
      ids = usersSelected.filter(x => x !== row.id);
      setUsersSelected(ids);
    }
    selectAttended(ids);
  };

  const handleOnSelectAll = (isSelect: any, rows: any) => {
    let ids: number[] = rows.map((r: any) => r.id);
    if (isSelect) {
      setUsersSelected(ids);
    } else {
      setUsersSelected([]);
      ids = [];
    }
    selectAttended(ids);
  };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: (row: any, rowIndex: number) =>
      rowIndex > 1 ? "#00BFFF" : "#00FFFF",
    selected: usersSelected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll
  };
  return (
    <>
      {users && (
        <div className="card border-primary mb-3">
          <div className="card-header">Usuarios que Asistieron al evento</div>
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
                    {...props.baseProps}
                    pagination={paginationFactory()}
                    selectRow={selectRow}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      )}
    </>
  );
};
