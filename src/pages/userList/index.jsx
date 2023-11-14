import React, { useState } from "react";
import "./module.css";
import { DataGrid } from "@mui/x-data-grid";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function UserListPage() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "User",
      sortable: false,
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userInfoBadge">
            <img
              src={params.row.avatar}
              alt={(params.row.firstName || "") + (params.row.lastName || "")}
              className="userImg"
            />
            {(params.row.firstName || "") + " "+ (params.row.lastName || "")}
          </div>
        );
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "transactionAmount",
      headerName: "Amount",
      type: "number",
      width: 180,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={"/users/" + params.row.id}>
              <EditOutlined className="action" />
            </Link>

            <DeleteOutline
              className="action"
              onClick={() => handleDeleteUser(params.row.id)}
            />
          </div>
        );
      },
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      status: "Active",
      transactionAmount: 123000,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      status: "Active",
      transactionAmount: 123000,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      status: "Active",
      transactionAmount: 123000,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      status: "Active",
      transactionAmount: 123000,
      age: 16,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      status: "Active",
      age: 20,
      transactionAmount: 123000,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: "Sass",
      age: 150,
      status: "Active",
      transactionAmount: 123000,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      status: "In-active",
      transactionAmount: 123000,
      age: 44,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      status: "In-active",
      transactionAmount: 123000,
      age: 36,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      status: "Active",
      transactionAmount: 123000,
      age: 65,
      avatar:
        "https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png",
    },
  ];

  let [data, setData] = useState(rows);

  function handleDeleteUser(userId) {
    setData(data.filter((item) => item.id !== userId));
  }

  return (
    <div className="userListContainer">
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        disableDensitySelector
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
