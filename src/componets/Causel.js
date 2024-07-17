import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Causel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        navigation={true}
        s
        navigationStep={1}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        gap={20}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="slider"
        navigationButtonsProps={{
          style: {
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "18px",
          },
        }}
      >
        <Link href={"/portfolio/fold-twist-abstract"}>
          <div className="flex flex-col h-full  mt-3 mx-0 md:mx-5">
            <img
              src="/assets/bgf.png"
              alt="bg"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out "
            />
            <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
              <li className="list-none">VISUAL ART</li> <li> CONCEPT</li>
            </ul>
            <div className="text-xl lg:text-4xl mt-2 ">Fold Twist Abstract</div>
          </div>
        </Link>
        <Link href={"/portfolio/fold-twist-abstract"}>
          <div className="flex flex-col h-full  mt-3 mx-0 md:mx-5 ">
            <img
              src="/assets/red.webp"
              alt="bg"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out "
            />
            <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
              <li className="list-none uppercase">3D modeling</li>{" "}
              <li className="uppercase"> visulart</li>
              <li> CONCEPT</li>
            </ul>
            <div className="text-xl  lg:text-2xl mt-2 ">Colors of circel</div>
          </div>
        </Link>
        <Link href={"/portfolio/fold-twist-abstract"}>
          <div className="flex flex-col h-full  mt-3 mx-0 md:mx-5">
            <img
              src="/assets/color.png"
              alt="bg"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
            />
            <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
              <li className="list-none">VISUAL ART</li> <li> CONCEPT</li>
            </ul>
            <div className=" mt-2  text-xl  lg:text-2xl">
              Fold Twist Abstract
            </div>
          </div>
        </Link>
        <Link href={"/portfolio/fold-twist-abstract"}>
          <div className="flex flex-col h-full  mt-3 mx-0 md:mx-5">
            <img
              src="/assets/blue.webp"
              alt="bg"
              className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out "
            />
            <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
              <li className="list-none uppercase">3D modeling</li>{" "}
              <li className="uppercase"> visulart</li>
              <li> CONCEPT</li>
            </ul>
            <div className="text-xl  lg:text-2xl mt-2 ">Colors of circel</div>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Causel;
