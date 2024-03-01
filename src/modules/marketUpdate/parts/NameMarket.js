import React from "react";

const NameMarket = ({
  linkImg = "/iconsmarket1.png",
  name = "Bitcoin",
  unit = "BTC",
}) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-x-[5px]">
        <img src={linkImg} alt="" />
        <h1 className="text-[13px] font-normal text-white ml-[5px]">{name}</h1>
        <span className="block text-[#828282] text-[11px] font-normal">
          {unit}
        </span>
      </div>
    </div>
  );
};

export default NameMarket;
