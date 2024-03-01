import React from "react";

const ID = ({ id = "1" }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={13}
          height={13}
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M6.79468 0.366577L4.79468 4.36658L0.794678 4.86658L3.54801 7.94658L2.79468 12.3666L6.79468 10.3666L10.7947 12.3666L10.048 7.94658L12.7947 4.86658L8.79468 4.36658L6.79468 0.366577ZM6.79468 1.85991L8.35468 4.98658L11.4547 5.37324L9.33468 7.74658L9.91468 11.1799L6.79468 9.61991L3.67468 11.1799L4.25468 7.74658L2.13468 5.37324L5.23468 4.98658L6.79468 1.85991Z"
            fill="#BDBDBD"
          />
        </svg>
      </span>
      <h1 className="text-[#828282] text-[12px] font-normal">{id}</h1>
    </div>
  );
};

export default ID;
