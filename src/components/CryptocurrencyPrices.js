import React, { Fragment, useEffect, useState } from "react";
import Title from "../commom/Title";
import ID from "../modules/marketUpdate/parts/ID";
import NameMarket from "../modules/marketUpdate/parts/NameMarket";
import PriceMarket from "../modules/marketUpdate/parts/PriceMarket";
import Fluctuation from "../modules/marketUpdate/parts/Fluctuation";
import PriceTranfer from "../modules/marketUpdate/parts/PriceTranfer";
import ChartUp from "../icon/ChartUp";
import ChartBox from "../modules/marketUpdate/parts/ChartBox";

const dataMarket = [
  {
    id: 1,
    nameMarket: { linkImg: "/iconsmarket1.png", name: "Bitcoin", unit: "BTC" },
    price: "55,206.61",
    In24h: { kind: "up", number: 0.92 },
    In7d: { kind: "up", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "up",
  },
  {
    id: 2,
    nameMarket: { linkImg: "/iconsmarket2.png", name: "Ethereum", unit: "ETH" },
    price: "55,206.61",
    In24h: { kind: "down", number: 0.92 },
    In7d: { kind: "up", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "up",
  },
  {
    id: 3,
    nameMarket: { linkImg: "/iconsmarket3.png", name: "Cardano", unit: "ADA" },
    price: "55,206.61",
    In24h: { kind: "down", number: 0.92 },
    In7d: { kind: "down", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "down",
  },
  {
    id: 4,
    nameMarket: { linkImg: "/iconsmarket4.png", name: "Tether", unit: "USDT" },
    price: "55,206.61",
    In24h: { kind: "up", number: 0.92 },
    In7d: { kind: "up", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "up",
  },
  {
    id: 5,
    nameMarket: {
      linkImg: "/iconsmarket5.png",
      name: "Avalanche",
      unit: "AVAX",
    },
    price: "55,206.61",
    In24h: { kind: "down", number: 0.92 },
    In7d: { kind: "down", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "down",
  },
  {
    id: 6,
    nameMarket: {
      linkImg: "/iconsmarket6.png",
      name: "Algorand",
      unit: "ALGO",
    },
    price: "55,206.61",
    In24h: { kind: "up", number: 0.92 },
    In7d: { kind: "up", number: 15.86 },
    marketCap: "1,046,899,935,348",
    volume: { price: "1,046,899,935,348", quantity: "653,452", unit: "BTC" },
    Last7Day: "up",
  },
];

const CryptocurrencyPrices = () => {
  const [shouldMobile, setShouldMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra kích thước màn hình và quyết định ẩn/hiển thị slider
      setShouldMobile(window.innerWidth < 1024);
    };

    // Gọi hàm handleResize khi kích thước màn hình thay đổi
    window.addEventListener("resize", handleResize);

    // Gọi hàm handleResize ngay khi component được mount để kiểm tra kích thước ban đầu
    handleResize();

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="px-[16px] lg:px-[135px] pb-[110px] ">
      <Title
        className="text-[#FFF] text-[32px] text-center mt-[95px] mb-[60px]"
        name="Today's Cryptocurrency Prices"
      ></Title>

      <div>
        <table className="text-white w-full ">
          <thead>
            <tr className="border-[1px] border-[#BDBDBD] border-l-transparent border-r-transparent ">
              {!shouldMobile && (
                <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                  #
                </th>
              )}
              <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                Name
              </th>
              {!shouldMobile && (
                <Fragment>
                  <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                    price
                  </th>
                  <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                    24h %
                  </th>
                  <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                    7d %
                  </th>
                  <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5 flex items-center justify-center gap-x-[10px]">
                    market cap
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.96875 14.2147C9.82527 14.2147 11.6057 13.4772 12.9185 12.1644C14.2313 10.8517 14.9688 9.07118 14.9688 7.21466C14.9688 5.35815 14.2313 3.57767 12.9185 2.26491C11.6057 0.952159 9.82527 0.214661 7.96875 0.214661C6.11223 0.214661 4.33176 0.952159 3.019 2.26491C1.70625 3.57767 0.96875 5.35815 0.96875 7.21466C0.96875 9.07118 1.70625 10.8517 3.019 12.1644C4.33176 13.4772 6.11223 14.2147 7.96875 14.2147ZM8.7825 5.97916L7.9075 10.096C7.84625 10.3935 7.93288 10.5624 8.1735 10.5624C8.34325 10.5624 8.59963 10.5012 8.77375 10.3472L8.69675 10.7112C8.44562 11.0139 7.89175 11.2344 7.41488 11.2344C6.79975 11.2344 6.53813 10.8652 6.70788 10.0803L7.35362 7.04579C7.40963 6.78941 7.35888 6.69666 7.1025 6.63454L6.70788 6.56366L6.77962 6.23029L8.78337 5.97916H8.7825ZM7.96875 5.02716C7.73669 5.02716 7.51413 4.93497 7.35003 4.77088C7.18594 4.60678 7.09375 4.38422 7.09375 4.15216C7.09375 3.9201 7.18594 3.69754 7.35003 3.53344C7.51413 3.36935 7.73669 3.27716 7.96875 3.27716C8.20081 3.27716 8.42337 3.36935 8.58747 3.53344C8.75156 3.69754 8.84375 3.9201 8.84375 4.15216C8.84375 4.38422 8.75156 4.60678 8.58747 4.77088C8.42337 4.93497 8.20081 5.02716 7.96875 5.02716Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </span>
                  </th>
                </Fragment>
              )}
              <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                volume(24h)
              </th>
              {!shouldMobile && (
                <th className="text-[#FFF] text-sm text-center font-medium capitalize pt-2 pb-5">
                  last 7 days
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {dataMarket.map((item) => (
              <tr
                key={item.id}
                className="border-[1px] border-[#BDBDBD] border-l-transparent border-r-transparent  "
              >
                {!shouldMobile && (
                  <td className="pt-[25px] pb-[36px] text-center ">
                    {" "}
                    <ID id={item.id}></ID>
                  </td>
                )}
                <td className="pt-[25px] pb-[36px] text-center">
                  <NameMarket
                    linkImg={item.nameMarket.linkImg}
                    name={item.nameMarket.name}
                    unit={item.nameMarket.unit}
                  ></NameMarket>
                </td>
                {!shouldMobile && (
                  <Fragment>
                    <td className="pt-[25px] pb-[36px] text-center">
                      <PriceMarket price={item.price}></PriceMarket>
                    </td>
                    <td className="pt-[25px] pb-[36px] text-center">
                      <Fluctuation
                        kind={item.In24h.kind}
                        percent={item.In24h.number}
                      ></Fluctuation>
                    </td>

                    <td className="pt-[25px] pb-[36px] text-center">
                      <Fluctuation
                        kind={item.In7d.kind}
                        percent={item.In7d.number}
                      ></Fluctuation>
                    </td>

                    <td className="pt-[25px] pb-[36px] text-center">
                      <PriceMarket price={item.marketCap}></PriceMarket>
                    </td>
                  </Fragment>
                )}
                <td className="pt-[25px] pb-[36px] text-center">
                  <div className="flex flex-col   gap-y-2">
                    <PriceMarket price={item.volume.price}></PriceMarket>
                    <PriceTranfer
                      quantity={item.volume.quantity}
                      unit={item.volume.unit}
                      className="pl-[62px]"
                    ></PriceTranfer>
                  </div>
                </td>

                {!shouldMobile && (
                  <td className="pt-[25px] pb-[36px] text-center">
                    <ChartBox kind={item.Last7Day}></ChartBox>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptocurrencyPrices;
