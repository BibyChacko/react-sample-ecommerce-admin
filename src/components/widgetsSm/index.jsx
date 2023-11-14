import React from "react";
import "./module.css";
import { Card, Button } from "@mui/material";
import { Visibility } from "@mui/icons-material";

export default function WidgetsSm(props) {
  return (
    <Card className="widgetsSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          props.newJoineesList.map(person=>{
            return  <li className="widgetSmListItem" key={person.name + person.role}>
            <div style={{display:"flex"}}>
              <img
                src={person.image}
                alt={person.name}
                className="widgetSmImg"
              />
              <div className="userInfoContainer">
                <span className="usernameText">{person.name}</span>
                <span className="userJobTitleText">{person.role}</span>
              </div>
            </div>
          
            <Button variant="outlined" className="actionButton" startIcon={<Visibility />}>
               details
            </Button>
          </li>
          })
        }
      </ul>
    </Card>
  );
}
