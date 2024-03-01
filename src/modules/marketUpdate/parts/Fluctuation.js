import React from "react";

const Fluctuation = ({ kind = "up", percent = "15.68" }) => {
  if (kind === "up") {
    return (
      <div className="flex items-center justify-center gap-x-1 text-[#1AFF7C] text-[13px] font-normal">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={7}
            height={7}
            viewBox="0 0 7 7"
            fill="none"
          >
            <path
              d="M3.25548 0.366577L0.0480957 6.36658H6.46286L3.25548 0.366577Z"
              fill="#1AFF7C"
            />
          </svg>
        </span>
        <h1>{percent}%</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-1 text-[#FF1A1A] justify-center  text-[13px] font-normal">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={9}
          height={7}
          viewBox="0 0 9 7"
          fill="none"
        >
          <path
            d="M4.41938 6.90295L0.539062 0.902954H8.29969L4.41938 6.90295Z"
            fill="#FF1A1A"
          />
        </svg>
      </span>
      <h1>{percent}%</h1>
    </div>
  );
};

export default Fluctuation;
