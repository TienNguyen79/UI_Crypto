import React from "react";
import { Link } from "react-router-dom";
const navArr = [
  {
    id: 1,
    name: "Home",
    to: "/home",
  },
  {
    id: 2,
    name: "Company",
    to: "/company",
  },
  {
    id: 3,
    name: "About",
    to: "/home",
  },
  {
    id: 4,
    name: "Pricing",
    to: "/home",
  },
  {
    id: 5,
    name: "Team",
    to: "/home",
  },
  {
    id: 6,
    name: "Contact",
    to: "/home",
  },
  {
    id: 7,
    name: "Blog",
    to: "/home",
  },
];

const NavHeader = () => {
  return (
    <header className="pt-[31px]">
      <div className="flex justify-between items-center">
        <div className="w-[154px] h-[40px]">
          <img
            src="/logoPri.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="lg:flex gap-x-[20px] items-center hidden ">
          {navArr.map((item) => (
            <Link key={item.id} to={item.to}>
              <h1 className="text-[#FFF] font-normal text-[17px]">
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
        <button className="py-[15px] px-[30px] bg-transparent border-[2px] border-[#EB5757] rounded-[50px] text-[#FFF]  hidden  lg:block ">
          Trade Now
        </button>

        <div className="block lg:hidden">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={15}
              viewBox="0 0 25 15"
              fill="none"
            >
              <line
                x1="0.75"
                y1="1.03625"
                x2="24.25"
                y2="1.03625"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0.75"
                y1="7.35568"
                x2="24.25"
                y2="7.35568"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0.75"
                y1="13.6751"
                x2="24.25"
                y2="13.6751"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
