import React from "react";

const TitlePlatform = ({ children, className = "" }) => {
  return (
    <h1 className={`text-[#000] text-[24px] font-semibold ${className}`}>
      {children}
    </h1>
  );
};

export default TitlePlatform;
