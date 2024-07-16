import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Causel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="h-screen w-full">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container h-full"
        removeArrowOnDeviceType={[]}
        renderArrowOnEdge={true}
        partialVisible={true}
      >
        <div className="flex justify-between rounded-lg gap-10 h-full">
          <Link href={"/blog/the-art-of-coffe"}>
            <div className="flex flex-col h-full">
              <img
                src="/assets/bgf.png"
                alt="bg"
                className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              />
              <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
                <li className="list-none">VISUAL ART</li> <li> CONCEPT</li>
              </ul>
              <div className="text-4xl mt-2 ">Fold Twist Abstract</div>
            </div>
          </Link>

            <Link href={"/blog/the-art-of-coffe-2"}>
          <div className="flex flex-col h-full">
              <img
                src="/assets/color.png"
                alt="bg"
                width={"100%"}
                className="rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              />
              <ul className="flex flex-row list-disc gap-6 mt-5 text-md">
                <li className="list-none uppercase">3D modeling</li>{" "}
                <li className="uppercase"> visulart</li>
                <li> CONCEPT</li>
              </ul>
              <div className="text-4xl mt-2 ">Colors of circel</div>
          </div>
            </Link>
        </div>

        {/* Add more items here */}
      </Carousel>
    </div>
  );
};

export default Causel;
