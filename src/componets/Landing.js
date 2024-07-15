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
const Landing = () => {
  return (
    <div className="container mx-auto pl-[5rem] pr-[5rem]">
      <div className="text-[8rem] font-bold text-center head  mb-28">
        <span className="text-black stroke-white ">Jackson Jack</span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-2/5">
          <div className="uppercase text-sm ">BIOGRAPHY</div>
          <p className="max-w-80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>

          <div className="uppercase text-sm mt-10">BIOGRAPHY</div>
          <div className="mt-2 flex flex-row justify-between">
            <li className="mx-2">Web Development</li>
            <li className="mx-2">UI & UX Design</li>
            <li className="mx-2">SEO</li>
            <li className="mx-2">Management</li>
          </div>
          <div className="uppercase text-sm mt-10 mb-2 ">CONNECT </div>
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

        <div className="w-2/5">
          <Image
            src="/assets/hero.png"
            alt="heto"
            width={320}
            height={320}
            className="rounded-full"
          />
        </div>
        <div className="w-1/5 text-right">
          <div className="">PROJECTS DONE</div>
          <h2 className="text-[3.5rem]">432</h2>

          <div className="mt-8">YEARS OF EXPERIENCE</div>
          <h2 className="text-[3.5rem]">13+</h2>
          <div className="mt-8">WORLDWIDE CLIENTS</div>
          <h2 className="text-[3.5rem]">900</h2>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-20">
        <div className="w-1/3">
          <div className="uppercase">Services</div>
          <div className="text-[4rem]">
            What I <span className="text-pink-300">Do</span>
          </div>
        </div>
        <div className="w-2/3 mb-6">
          {[1, 3, 4]?.map(() => {
            return (
              <div className="bg-gray-500 h-28 rounded-md border-b-4 border-b-violet-600 p-5 mb-5">
                <div className="flex flex-row justify-between gap-20 ">
                  <div className="w-1/2 flex justify-between ">
                    <div className=" flex items-center text-2xl">01/</div>
                    <div className=" flex justify-between gap-3 items-center">
                      <FontAwesomeIcon
                        icon={faBrave}
                        size={30}
                        color="black"
                        className="font-[2rem]"
                      />
                      <p className="text-3xl">Design</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="2/4 text-lg ml-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-40">
        <div className="flex justify-between opacity-25 h">
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
          <div className="opacity-70  hover:opacity-100">
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
          <div className="opacity-70  hover:opacity-100">
            <Image
              src="/assets/five.png"
              alt="fitst"
              width={160}
              height={150}
            />
          </div>
        </div>
      </div>
      <Work/>
    </div>
  );
};

export default Landing;
