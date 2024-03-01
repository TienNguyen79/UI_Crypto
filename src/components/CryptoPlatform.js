import React from "react";
import ImageFeature from "../modules/feature/part/ImageFeature";
import Content from "../modules/feature/part/Content";
import TitlePlatform from "../modules/feature/part/TitlePlatform";
import Title from "../commom/Title";

const CryptoPlatform = () => {
  return (
    <div className="px-[16px] lg:px-[135px] pb-[110px]">
      <Title
        className="text-[#171717] text-[20px] lg:text-[32px] text-center mt-[92px] mb-[60px]"
        name="The most trusted cryptocurrency platform"
      ></Title>
      <div className="grid grid-cols-1 gap-x-0 gap-y-[96px] lg:gap-y-0  lg:grid-cols-3 lg:gap-x-[140px] place-items-center">
        <div className="flex flex-col  items-center justify-center lg:items-start">
          <ImageFeature></ImageFeature>
          <TitlePlatform className="mt-[45px] mb-[29px]">
            Ease of Trading
          </TitlePlatform>
          <div className="flex flex-col gap-y-[29px]">
            <Content>Intuitive interface</Content>
            <Content>Instant deposit options</Content>
            <Content>Cash out directly to your bank account</Content>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center lg:items-start">
          <ImageFeature linkImg="/iconPlatform2.png"></ImageFeature>
          <TitlePlatform className="mt-[45px] mb-[29px]">
            Ease of Trading
          </TitlePlatform>
          <div className="flex flex-col gap-y-[29px]">
            <Content>Intuitive interface</Content>
            <Content>Instant deposit options</Content>
            <Content>Cash out directly to your bank account</Content>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center lg:items-start">
          <ImageFeature linkImg="iconPlatform3.png"></ImageFeature>
          <TitlePlatform className="mt-[45px] mb-[29px]">
            Ease of Trading
          </TitlePlatform>
          <div className="flex flex-col gap-y-[29px]">
            <Content>Intuitive interface</Content>
            <Content>Instant deposit options</Content>
            <Content>Cash out directly to your bank account</Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPlatform;
