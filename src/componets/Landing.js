import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrave,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Work from "./Work";
import CountUp from "react-countup";

const Landing = () => {
  return (
    <div className="container lg:px-[5rem] md:px-[3rem] px-[10px] mx-auto">
      <div className="text-[8rem] font-bold text-center head my-11 md:mb-28">
        <h1 class="animate-fade-in-down  text-black stroke-white ">
          Jackson Jack
        </h1>
      </div>
      <div className="flex   flex-wrap lg:flex-nowrap lg:flex-now ">
        <div className="w-full mt-5 lg:w-2/5 order-2">
          <div className="uppercase text-sm ">BIOGRAPHY</div>
          <p className="max-w-80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex lg:block">
            <div className="uppercase mt-10">
              <p className="text-sm ">BIOGRAPHY</p>
              <div className="mt-2 flex flex-row flex-wrap max-w-64">
                <li className="mx-2">Web Development</li>
                <li className="mx-2">UI & UX Design</li>
                <li className="mx-2">SEO</li>
                <li className="mx-2">Management</li>
              </div>
            </div>
            <div className="uppercase  mt-10 mb-2 ">
              <p className="text-sm mb-2">CONNECT</p>
              <FontAwesomeIcon
                icon={faFacebook}
                color="black"
                className="bg-gray-300 p-3 rounded-full mr-2"
              />
              <FontAwesomeIcon
                color="black"
                icon={faInstagram}
                className="bg-gray-300 p-3 rounded-full mr-2"
              />
              <FontAwesomeIcon
                color="black"
                icon={faTwitter}
                className="bg-gray-300 p-3 rounded-full mr-2"
              />
            </div>
          </div>
        </div>

        <div className="w-full order-1 lg:w-2/5 lg:order-2 ">
          <Image
            src="/assets/hero.png"
            alt="heto"
            width={320}
            height={320}
            className="rounded-full hover:animate-bounce"
          />
        </div>
        <div className="w-full lg:w-1/5 order-3 lg:text-right mt-10 lg:mt-0 flex lg:block">
          <div className="flex flex-col lg:block">
            <p className="">PROJECTS DONE</p>
            <h2 className="text-[2rem] md:text-[3.5rem]">
              <CountUp end={432} start={10} duration={3} />
            </h2>
          </div>
          <div className="flex flex-col lg:block">
            <p className="md:mt-8">YEARS OF EXPERIENCE</p>
            <h2 className="text-[2rem] md:text-[3.5rem]">13+</h2>
          </div>
          <div className="flex flex-col lg:block">
            <p className="md:mt-8">WORLDWIDE CLIENTS</p>
            <h2 className="text-[2rem] md:text-[3.5rem]">
              <CountUp end={900} start={10} duration={3} />
            </h2>
          </div>
        </div>
      </div>
      <div className="lg:flex block flex-row justify-between mt-20">
        <div className="lg:w-1/3 w-full">
          <div className="uppercase">Services</div>
          <div className="lg:text-[4rem] text-[2rem]">
            What I{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
              Do
            </span>
          </div>
        </div>
        <div className=" lg:w-2/3 mb-6 w-full">
          {[1, 3, 4]?.map(() => {
            return (
              <div className="hover:bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-gray-500 h-28 rounded-md border-b-4 border-b-violet-600 px-5 py-24 mb-5 flex justify-center items-center">
                <div className="lg:flex block flex-row justify-between gap-20">
                  <div className="lg:w-1/2 w-full flex gap-10 items-center">
                    <div className="text-2xl flex items-center">01/</div>
                    <div className="flex justify-between gap-3 items-center">
                      <FontAwesomeIcon
                        icon={faBrave}
                        size={30}
                        color="black"
                        className="font-[2rem]"
                      />
                      <p className="text-3xl">Design</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-40">
        <div className="flex justify-between opacity-25 h ">
          <div className="opacity-70  hover:opacity-100">
            <Image
              src="/assets/first.png"
              alt="fitst"
              width={160}
              height={150}
            />
          </div>
          <div className="opacity-70  hover:opacity-100">
            <Image src="/assets/sec.png" alt="fitst" width={160} height={150} />
          </div>
          <div className="opacity-70  hover:opacity-100 ">
            <Image
              src="/assets/third.png"
              alt="fitst"
              width={160}
              height={150}
            />
          </div>
          <div className="opacity-70  hover:opacity-100">
            <Image
              src="/assets/four.png"
              alt="fitst"
              width={160}
              height={150}
            />
          </div>
          <div className="opacity-70  hover:opacity-100 ">
            <Image
              src="/assets/five.png"
              alt="fitst"
              width={160}
              height={150}
            />
          </div>
        </div>
      </div>
      <Work />
    </div>
  );
};

export default Landing;
