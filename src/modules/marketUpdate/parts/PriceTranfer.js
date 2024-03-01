import React from "react";

const PriceTranfer = ({
  quantity = "632,33",
  unit = "BTC",
  className = "",
}) => {
  return (
    <div>
      <h1
        className={`text-[#828282] text-[11px] font-semibold uppercase ${className} `}
      >
        {quantity} {unit}
      </h1>
    </div>
  );
};

export default PriceTranfer;
