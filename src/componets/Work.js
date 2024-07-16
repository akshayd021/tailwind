import {
  faAffiliatetheme,
  faAlipay,
  faLeanpub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Causel from "./Causel";
import Test from "./Test";

const Work = () => {
  return (
    <>
      <div className="bg-gray-400 p-5 lg:p-16 rounded-2xl">
        <div className="px-5">
          <div className="text-gray-700">PORTFOLIO</div>
          <div className="text-[2rem] md:text-[4rem]">
            Resent{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
              Works
            </span>
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </div>
        <div className="w-full my-5">
          <Test />
        </div>
      </div>
      <div className="lg:flex block justify-between  flex-row mt-16">
        <div className="lg:w-2/5 w-full  ">
          <div className="text-gray-700 ">ACHIEVEMENTS </div>
          <div className="text-[4rem]">
            Awa
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
              rds
            </span>
          </div>
        </div>

        <div className="lg:w-3/5 lg:flex block w-full flex-wrap ">
          {[2, 3, 4, 5]?.map(() => {
            return (
              <div className="bg-gray-500 hover:bg-gradient-to-br from-violet-500 to-pink-100  w-1/2 gap-3 flex-none rounded-md border-b-4 ml--2 border-b-violet-600 p-8 mb-5">
                <div className="text-xl">Award Title </div>
                <p className="text-gray-300">2023</p>
                <p className="text-xl mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-16 justify-center items-center mt-24">
        <img
          src="/assets/girl.png"
          alt="girl"
          width={280}
          height={280}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-[1.75rem] text-left">Marcella Leonard</h3>
          <h4 className="text-[1rem] uppercase text-left mt-2">
            Creative Director
          </h4>
          <p className="text-[1.5rem] italic text-left mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <hr className="h-1 border-none bg-pink-500 rounded-full mt-10" />
        </div>
      </div>
      <div className="bg-gray-400 p-16 rounded-2xl my-40">
        <div className="px-5">
          <div className="text-gray-700">JOURNAL</div>
          <div className="text-[4rem]">
            Blog{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
              Posts
            </span>
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </div>
        <div className="w-full my-5 relative">
          <Test />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-20 ">
        <div className="w-1/3">
          <div className="uppercase">CONTACT</div>
          <div className="text-[4rem]">
            Let's
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
              Talk
            </span>
          </div>
        </div>
        <div className="w-2/3 mb-6">
          <div className=" flex flex-row">
            <div className="w-1/2">
              <div className="flex flex-col">
                <h4>EMAIL :</h4>
                <p className="text-[1.5rem]">akshay2004vbi@gmail.com</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col">
                <h4>CALL :</h4>
                <p className="text-[1.5rem]">+123 456 7890</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-10 mt-5">
            <div className="w-1/2 ">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-400 p-2 text-white rounded-lg border border-gray-400 w-full placeholder:text-white"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-400 p-2 rounded-lg border border-gray-400 w-full placeholder:text-white"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-400 mt-5 p-2 rounded-lg border border-gray-400 w-full placeholder:text-white"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="bg-gray-400 mt-5 p-2 rounded-lg border border-gray-400 w-full placeholder:text-white"
          />
        </div>
      </div>
      <div className="mb-20">
        <button className="absolute right-24 px-6 py-2 mb-10 bg-gray-400  rounded-3xl">
          Send Message
        </button>
      </div>
      <div className="w-full h-full object-contain rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.215547088726!2d72.7804841757558!3d21.18359468244166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc878fe7173%3A0x6908025734006721!2sVBinfotech%20-%20Web%20designing%2C%20Web%20development%2C%20Mobile%20app%20development%2C%20training%20center!5e0!3m2!1sen!2sin!4v1721046866466!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Work;
