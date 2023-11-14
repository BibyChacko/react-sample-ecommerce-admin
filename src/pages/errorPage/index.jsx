import React from "react";
import "./module.css";
import { Button } from "@mui/material";

export default function ErrorPage() {
  return (
    <div className="errorContainer">
      <div className="errorContainerWrapper">
        <span className="errorTitleText">Oops! Something went wrong</span>
        <span className="errorTitleDesc">
          The page your are looking for is not found, check your URL
        </span>
        <Button variant="outlined" className="errorActionButton">Back to home</Button>
      </div>
    </div>
  );
}
