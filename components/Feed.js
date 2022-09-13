import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import { posts } from "../Data/post";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="lg:ml-[250px] border-l border-r border-gray-200  lg:min-w-[500px] sm:ml-[73px] flex-grow max-w-[500px]">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
