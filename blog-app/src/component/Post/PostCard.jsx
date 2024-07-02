import React from "react";
import { Button } from "../Index";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const posts = [
  {
    username: "Anil",
    date: "July 24",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HXB9PMyokRTkCcVOzOaYqMjb1X5oYdRLsg&s",
    category: "Travel",
  },
  {
    username: "Bal",
    date: "July 21",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtDPfbfcQ1W5nqCkYv6kkiIA4HShNyFgQTA&s",
    category: "Food",
  },
  {
    username: "Shijal",
    date: "August 14",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HXB9PMyokRTkCcVOzOaYqMjb1X5oYdRLsg&s",
    category: "Game",
  },
  {
    username: "Shushil",
    date: "June 4",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&s",
    category: "Science",
  },
  {
    username: "Yuma",
    date: "July 23",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HXB9PMyokRTkCcVOzOaYqMjb1X5oYdRLsg&s",
    category: "Blog",
  },
];

const PostCard = () => {
  return (
    <>
    {posts.map((item)=>{
      return <Link to={`/blog/${item.username}`} key={item.username}>
      <div className=" py-5 w-full flex items-center justify-between gap-10">
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-10">
        <p>@{item.username}</p>
        <p>Post on: {item.date}</p>
      </div>
      <div>
          <h2 className=" font-semibold text-xl">
            {item.title}
          </h2>
          <p>
            {item.description}
          </p>
      </div>
      <div className="flex p-2 items-center gap-10">
        <Button children={item.category} />
        <FaHeart className="text-[30px] text-red-600" />
      </div>
      </div>
      <img src={item.image} alt="" className=" h-[120px] w-[150px] rounded" />
    </div>
      </Link>
    })}
    </>
  );
};

export default PostCard;
