import Carousel from "react-bootstrap/Carousel";
import imageOne from "/images/other/imageOne.jpeg";
import imageThree from "/images/other/imageThree.jpeg";
import imageTwo from "/images/other/imageTwo.jpeg";
import { useState } from "react";

export const Carousel1 = () => {
  return (
    <Carousel className=" mb-4" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-80"
          src={imageOne}
          height="100%"
        />
        <Carousel.Caption className="sm:align-top sm:leading-3 md:align-top">
          <p className="font-coursive sm:text-lg md:text-2xl lg:text-5xl">
            Sale 30% off
          </p>
          <p className=" font-bold sm:text-lg md:text-2xl lg:text-5xl">
            A Wold Of Natural Flavor
          </p>
          <p className="text-sm">
            Enjoy free delivery with min. purchase of
            <span className="font-bold"> SALESUMMER30</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-80"
          src={imageTwo}
          alt="Second slide"
          height="100%"
        />
        <Carousel.Caption>
          <p className="font-coursive sm:text-lg md:text-2xl lg:text-5xl ">
            Season Sale
          </p>
          <p className="font-bold sm:text-lg md:text-2xl lg:text-5xl">
            Spice Season Returns
          </p>
          <p className="text-sm">From cereal to noodle to the return!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-80"
          src={imageThree}
          alt="Third slide"
          height="100%"
        />
        <Carousel.Caption>
          <p className="font-bold sm:text-lg md:text-2xl lg:text-5xl">
            Subscribe to our newsletter!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
