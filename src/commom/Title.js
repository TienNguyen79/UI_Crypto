import React from "react";

const Title = ({ className = "", name = "Title test" }) => {
  return <h1 className={`${className} font-bold`}>{name}</h1>;
};

export default Title;
