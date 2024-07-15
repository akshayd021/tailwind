import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto pl-[5rem] pr-[5rem] mt-10">
      <div className="px-20">
        <h1 className="text-[4rem] text-center">
          Fold Twist <span className="text-pink-400">Abstract</span>{" "}
        </h1>
        <p className="max-w-fit">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
      </div>
      <div className="flex flex-row justify-between mt-10 gap-6">
        <div className="w-1/4 p-6 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>CATEGORY:</p>
          <p>Tips & Tricks</p>
        </div>
        <div className="w-1/4 p-6 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>POSTED BY :</p>
          <p>Admin</p>
        </div>
        <div className="w-1/4 p-6 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>TAGS:</p>
          <ul className="list-disc flex justify-between">
            <li className="list-none"> Work</li>
            <li>Expereance </li>
            <li> Tips</li>
          </ul>
        </div>
        <div className="w-1/4 p-6 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>POSTED ON:</p>
          <p>Oct 12</p>
        </div>
      </div>
      <div className="bg-gray-900 p-16 rounded-2xl mt-20">
        <p className=" text-md px-20 flo">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src="/assets/cute.png" alt="cute" className="rounded-lg mt-5" />
        <div className="flex flex-row justify-between mt-10 gap-6">
          <div className="w-1/2">
            <img src="/assets/bgf.png" alt="red" className="rounded-lg" />
          </div>
          <div className="w-1/2">
            <img src="/assets/color.png" alt="red" className="rounded-lg" />
          </div>
        </div>

        <div className="flex flex-row justify-between mt-6">
          <button className="px-8 py-2 mb-10 bg-gray-400  rounded-3xl">
            Pre Post
          </button>
          <button className="px-8 py-2 mb-10 bg-gray-400  rounded-3xl">
            Next Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
