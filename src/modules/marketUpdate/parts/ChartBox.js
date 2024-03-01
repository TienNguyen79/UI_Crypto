import React from "react";
import ChartUp from "../../../icon/ChartUp";
import ChartDown from "../../../icon/ChartDown";

const ChartBox = ({ kind = "up" }) => {
  if (kind === "up") {
    return (
      <div className="flex items-center justify-center">
        <ChartUp></ChartUp>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <ChartDown></ChartDown>
    </div>
  );
};

export default ChartBox;
