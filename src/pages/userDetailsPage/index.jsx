import React from "react";
import "./module.css";
import { Button, Card, TextField, Box } from "@mui/material";
import {
  CalendarMonthRounded,
  LocationOnOutlined,
  MailOutline,
  PermIdentityOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";

export default function UserDetailPage() {
  return (
    <div className="editUserPageSection">
      <div className="userTitleSection">
        <h3 className="title">Edit User</h3>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>

      <div className="userInfoSection">
        <Card className="userShow">
          <div className="userShowTop">
            <img
              src="https://seeklogo.com/images/G/game-of-thrones-logo-3A574D3ECB-seeklogo.com.png"
              alt="User_Image"
              className="userShowImg"
            />
            <div className="userShowTopTile">
              <span className="showUserName">Anna Becker</span>
              <span className="showUserJobRole">Software Engineer</span>
            </div>
          </div>
          <div className="userShowOtherInfo">
            <h4 className="titleSub">Account Information</h4>
            <div className="userShowInfoBadge">
              <PermIdentityOutlined className="userShowInfoIcon" />
              <span className="userShowInfoText">anne.backer52</span>
            </div>
            <div className="userShowInfoBadge">
              <CalendarMonthRounded className="userShowInfoIcon" />
              <span className="userShowInfoText">10 Mar 1997</span>
            </div>

            <h4 className="titleSub">Contact Information</h4>
            <div className="userShowInfoBadge">
              <PhoneAndroidOutlined className="userShowInfoIcon" />
              <span className="userShowInfoText">+91 9087 789067</span>
            </div>

            <div className="userShowInfoBadge">
              <MailOutline className="userShowInfoIcon" />
              <span className="userShowInfoText">
                anne.backer1997@gmail.com
              </span>
            </div>
            <div className="userShowInfoBadge">
              <LocationOnOutlined className="userShowInfoIcon" />
              <span className="userShowInfoText">
                Infopark, Kochi, Ernakulam
              </span>
            </div>
          </div>
        </Card>
        <Card className="userUpdate">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            className="editForm"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value="anne.backer1997@gmail.com"
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value="anne.backer52"
            />
            <TextField
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              value="+91 9087 789067"
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value="Infopark, Kochi, Ernakulam"
            />
            <TextField
              id="outlined-basic"
              label="Date of birth"
              variant="outlined"
              value="10 Mar 1997"
            />
            <br />{" "}
            <Button variant="outlined" className="updateButton">
              Update
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
}
