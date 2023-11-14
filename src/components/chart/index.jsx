import "./module.css";
import React from "react";
import { Card } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function Chart({title, data, dataKeyXaxis,dataKeyYaxis, grid}) {
  return (
    <Card className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKeyXaxis} stroke="darkblue" />
          <Line type="montone" dataKey={dataKeyYaxis} stroke="darkblue" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#EAECEE" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
