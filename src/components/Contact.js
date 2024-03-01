import React from "react";
import Title from "../commom/Title";

const Contact = () => {
  return (
    <div className="px-[16px] lg:px-[135px] pt-[92px] pb-[110px] bg-[#1B004E] flex flex-col items-center bgImg-contact  ">
      <Title
        name="Never miss a drop"
        className="text-[#FFF] text-[24px] lg:text-[50px]  text-center"
      ></Title>
      <h1 className="text-[14px] lg:text-[24px] text-[#FFF] font-normal text-center">
        Subscribe for the latest news, drops & collectibles
      </h1>
      <div className="mt-[50px] w-[343px] lg:w-[578px] h-[74px] rounded-[37px] border-[2px] border-white flex items-center justify-between">
        <input
          type="text"
          className="w-full border-none outline-none bg-transparent text-white px-[21px] placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:text-white"
          placeholder="Enter your email address "
        />
        <button className="text-white rounded-[31px] bg-[#EB5757] py-4 mr-2 px-7">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
