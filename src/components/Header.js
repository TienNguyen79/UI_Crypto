import React from "react";
import NavHeader from "../modules/header/NavHeader";
import BannerHeader from "../modules/header/BannerHeader";

const Header = () => {
  return (
    <div className="bg-linear px-[16px] lg:px-[135px]">
      <NavHeader></NavHeader>
      <BannerHeader></BannerHeader>
    </div>
  );
};

export default Header;
