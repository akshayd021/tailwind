import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-black">
      <div className="flex-row flex justify-between gap-4 p-4 ">
        <div className="text-3xl font-bold"><Link href={'/'}>Mone
        </Link> </div>
        <div className="button gap-2 relative inline-flex align-middle ">
          <button className="pt-2 pb-2 pl-10 pr-10 bg-gray-500 hover:bg-rgb(53 34 75) border-r-gray-500 rounded-3xl text-md uppercase">
            Let's talk
          </button>
          <button className="pt-2 pb-2 pl-10 pr-10 bg-white text-black border-r-gray-500 rounded-3xl text-md uppercase relative transition duration-120 ease-out">
            <span className="inline-block">Menu</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-500 opacity-0 hover:opacity-100 transition duration-120 ease-out">
              Hidden text
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;