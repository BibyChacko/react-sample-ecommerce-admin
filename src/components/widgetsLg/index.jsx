import React from "react";
import "./module.css";
import {
  Card,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function WidgetsLg(props) {
  return (
    <Card className="widgetsLg ">
      <div className="lgContainerTitle">Latest transaction</div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.tableTitles.map((title) => (
                <TableCell align="left" className="transactionTableTitle">{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.transactionValueList.map((transaction) => (
              <TableRow>
                <TableCell component="th" scope="row" className="transactionItemCell">
                  {transaction.transactionId}
                </TableCell>
                <TableCell component="th" scope="row" className="transactionItemCell">
                  {transaction.customerName}
                </TableCell>
                <TableCell component="th" scope="row" className="transactionItemCell">
                  {transaction.amount}
                </TableCell>
                <TableCell component="th" scope="row" className="transactionItemCell"> 
                  {transaction.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
