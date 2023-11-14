import React from "react";
import "./module.css";
import FeaturedInfo from "../../components/featuredInfo";
import Chart from "../../components/chart";
import { salesAnalyticsData } from "../../data/dummySalesAnalytics";
import { newJoineeData } from "../../data/dummyNewJoinyData";
import WidgetsSm from "../../components/widgetsSm";
import WidgetsLg from "../../components/widgetsLg";
import { transactionData } from "../../data/dummyTransactionData";

export default function Home() {
  return (
    <div className="mainSection">
      <div className="featureInfoSection">
        <FeaturedInfo title="Sales" amount="30000" changeInPercentage="12" />
        <FeaturedInfo title="Revenue" amount="12000" changeInPercentage="45" />
        <FeaturedInfo title="Cost" amount="2800" changeInPercentage="-09" />
      </div>
      <div className="chartSection">
        <Chart
          data={salesAnalyticsData}
          dataKeyXaxis="name"
          dataKeyYaxis="ActiveUser"
          title="Sales Analytics"
          grid={true}
        />
      </div>
      <div className="homeWidgets">
        <WidgetsSm newJoineesList={newJoineeData} />
        <WidgetsLg
          transactionValueList={transactionData}
          tableTitles={["Transaction ID", "Customer", "Amount (in Rs.)","Status"]}
        />
      </div>
    </div>
  );
}
