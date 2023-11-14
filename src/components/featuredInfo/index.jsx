import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Card } from "@mui/material";
import "./module.css";

export default function FeaturedInfo(props) {
  const title = props.title;
  const amount = props.amount;
  const changeInPercentage = props.changeInPercentage;
  return (
    <Card className="featured">
      <div className="featuredItem">
        <span className="featuredItemTitle">{title}</span>
        <div className="featureValueDiv">
          <span className="featureValueAmount">${amount}</span>
          <span className="featureValueChangePercent">
            {changeInPercentage}%
          </span>
           {changeInPercentage > 0 ? (
            <ArrowUpward className="changeIcon positive" />
          ) : (
            <ArrowDownward className="changeIcon negative" />
          )}
        </div>
        <span className="featuredStatText">Compared to last month</span>
      </div>
    </Card>
  );
}
