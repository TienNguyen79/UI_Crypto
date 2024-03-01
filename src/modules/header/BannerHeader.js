import React from "react";
import Title from "../../commom/Title";

const BannerHeader = () => {
  return (
    <div className="mt-[110px]">
      <div className="flex items-center  ">
        <div className="w-[680px]">
          <h1 className="text-[24px] lg:text-[55px] font-bold text-[#FFF] text-center lg:text-left">
            Make better businees with Cryptocurrency
          </h1>
          <p className="text-[16px] text-center lg:text-left lg:text-[17px] font-normal text-white mt-2">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="py-[15px]  px-[30px] rounded-[50px] text-white bg-[#EB5757] mt-[32px]">
              Get Whitelisted
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/logoBanner.png"
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
