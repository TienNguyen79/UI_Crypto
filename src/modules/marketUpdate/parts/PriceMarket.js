import React from "react";

const PriceMarket = ({ price = "1,046,899,935,348", className = "" }) => {
  return (
    <h1 className={`text-sm font-medium capitalize text-[#FFF] ${className}`}>
      ${price}
    </h1>
  );
};

export default PriceMarket;
