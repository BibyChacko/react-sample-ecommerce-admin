import React from "react";
import "./module.css";
import {
  TrendingUp,
  LineStyle,
  Timeline,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebaListItem active">
              <LineStyle className="sidebarItemIcon" />
              Home
            </li>
            <li className="sidebaListItem">
              <TrendingUp className="sidebarItemIcon" />
              Trending
            </li>
            <li className="sidebaListItem">
              <Timeline className="sidebarItemIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Management</h3>
          <ul className="sidebarList">
            <li className="sidebaListItem">
              <Link to={"/users"} style={undefined}>
              <PersonOutlineOutlined className="sidebarItemIcon" />
              Users
              </Link>
            </li>
            <li className="sidebaListItem">
              <TrendingUp className="sidebarItemIcon" />
              Trending
            </li>
            <li className="sidebaListItem">
              <Timeline className="sidebarItemIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebaListItem ">
              <LineStyle className="sidebarItemIcon" />
              Home
            </li>
            <li className="sidebaListItem">
              <TrendingUp className="sidebarItemIcon" />
              Trending
            </li>
            <li className="sidebaListItem">
              <Timeline className="sidebarItemIcon" />
              Analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
