import React from "react";
import Title from "../commom/Title";
import Content from "../modules/feature/part/Content";
import ImageFeature from "../modules/feature/part/ImageFeature";

const CryptoDowload = () => {
  return (
    <div className="px-[16px] lg:px-[135px] pt-[117px] pb-[95px] bg-[#1B004E]">
      <div className="flex lg:flex-row  flex-col items-center justify-between">
        <div>
          <Title
            name="Try the future, today. Download Crypto"
            className="text-[#FFF] text-[20px] lg:text-[32px] w-[320px] lg:w-[400px] text-center lg:text-left"
          ></Title>
          <Content className="mt-[14px] mb-[50px] text-[#FFF] w-full lg:w-[500px] text-sm lg:text-[16px] leading-[1.8] font-fontInter">
            Stay connected to the market with our mobile app. Featuring advanced
            order types and analytical tools for experienced traders, as well as
            a simple buy & sell interface for those just getting started.
          </Content>
          <div className="lg:flex items-center gap-x-[30px] hidden  ">
            <ImageFeature
              linkImg="/appStore.png"
              className="w-[159px] h-[55px] "
            ></ImageFeature>
            <ImageFeature
              linkImg="/GooglePlay.png"
              className="w-[159px] h-[55px] "
            ></ImageFeature>
          </div>
        </div>
        <div>
          <ImageFeature
            linkImg="/imgPhone2.png"
            className="w-full h-full"
          ></ImageFeature>
        </div>
        <div className="lg:hidden items-center gap-x-[30px] flex mt-[30px]  ">
          <ImageFeature
            linkImg="/appStore.png"
            className="w-[159px] h-[55px] "
          ></ImageFeature>
          <ImageFeature
            linkImg="/GooglePlay.png"
            className="w-[159px] h-[55px] "
          ></ImageFeature>
        </div>
      </div>
    </div>
  );
};

export default CryptoDowload;
