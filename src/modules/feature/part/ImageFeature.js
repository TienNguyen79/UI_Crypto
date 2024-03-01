import React from "react";

const ImageFeature = ({
  linkImg = "/iconPlatform1.png",
  className = "w-[66px] h-[70px]",
}) => {
  return (
    <div className={`${className}`}>
      <img src={linkImg} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default ImageFeature;
