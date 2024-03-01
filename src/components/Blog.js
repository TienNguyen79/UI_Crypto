import React from "react";
import Title from "../commom/Title";
import BlogItem from "../modules/blog/BlogItem";
const dataBlog = [
  {
    id: 1,
    linkImage: "/imgBlog1.png",
    title:
      "New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange",
    content:
      "We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...",
    author: " Jennia Peris",
    date: "15/07/2021",
    minute: "5 ",
  },
  {
    id: 2,
    linkImage: "/imgBlog2.png",
    title:
      "New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange",
    content:
      "We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...",
    author: " Jennia Peris",
    date: "15/07/2021",
    minute: "6",
  },
  {
    id: 3,
    linkImage: "/imgBlog3.png",
    title:
      "New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange",
    content:
      "We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...",
    author: " Jennia Peris",
    date: "15/07/2021",
    minute: "7",
  },
];

const Blog = () => {
  return (
    <div className="px-[16px] lg:px-[135px] pb-[110px]">
      <Title
        className="text-[#171717] text-[32px] text-center mt-[100px] mb-[46px] font-semibold"
        name="Learn to thrive"
      ></Title>

      <div className="grid grid-cols-1 gap-y-[36px]  lg:grid-cols-3 lg:gap-x-[33px]">
        {dataBlog.map((data) => (
          <BlogItem key={data.id} data={data}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
