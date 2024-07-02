import React from "react";
import { Category, PostCard, Trending } from "../component/Index";
const Home = () => {
  return (
    <div className="w-full py-4 px-32 mt-5">
      <div className="flex flex-col gap-2 justify-center">
        <h1 className=" font-medium ml-4">Home</h1>
        <hr className=" w-20 border border-gray-500" />
      </div>
      <div className=" grid grid-cols-[1fr,0.5fr]">
        <div className=" px-4 py-4 w-full flex flex-col gap-4">
        <PostCard/>
        </div>
        <div className=" px-5">
          <Category/>
          <Trending/>
        </div>
      </div>
    </div>
  );
};

export default Home;
