import React from "react";

const Content = ({ children, className = "" }) => {
  return (
    <p
      className={`${className} text-[16px] font-normal font-fontInter text-center lg:text-left`}
    >
      {children}
    </p>
  );
};

export default Content;
