import React from "react";

const Blog = () => {
  return (
    <div className="container lg:px-[5rem] md:px-[3rem] px-[15px] mx-auto">
      <div className="lg:px-20 px-5">
        {/* <h1 className="text-[2rem] mt-10 lg:mt-0 lg:text-[4rem] md:text-[3rem] lg:text-center animate-pulse hover:animate-none">
          Fold Twist <span className="text-pink-400">Abstract</span>
        </h1> */}
        <h1 className="text-[2rem] mt-10 lg:mt-0 lg:text-[4rem] md:text-[3rem] lg:text-center animate-bounce">
          The Art of Coffee <span className="text-pink-400">Making</span>{" "}
        </h1>
        <p className="max-w-fit mt-5 lg:mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-10 gap-6">
        <div className="lg:w-1/4 md:w-1/2 p-6 w-full mt-5 lg:mt-0 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>CATEGORY:</p>
          <p>Tips & Tricks</p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-6 w-full mt-5 lg:mt-0 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>POSTED BY :</p>
          <p>Admin</p>
        </div>
        <div className="lg:w-1/4  md:w-1/2  p-6 w-full mt-5 lg:mt-0 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>TAGS:</p>
          <ul className="list-disc flex justify-start gap-6">
            <li className="list-none"> Work</li>
            <li>Expereance </li>
            <li> Tips</li>
          </ul>
        </div>
        <div className="lg:w-1/4  md:w-1/2  p-6 w-full mt-5 lg:mt-0 rounded-xl bg-gray-400 border-b-4 border-violet-900 hover:bg-pink-300">
          <p>POSTED ON:</p>
          <p>Oct 12</p>
        </div>
      </div>
      <div className="bg-gray-900 lg:p-16 md:p-10 rounded-2xl mt-20">
        <p className=" text-md mb-5 lg:px-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src="/assets/cute.png" alt="cute" className="rounded-lg mt-5" />
        <div className="md:flex block flex-row justify-between mt-10 gap-6 ">
          <div className="md:w-1/2 w-full">
            <img
              src="/assets/color.png"
              alt="red"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out md:w-full max-w-[80vw]"
            />
          </div>
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <img
              src="/assets/blue.webp"
              alt="red"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-ou max-w-[80vw] md:w-full"
            />
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
