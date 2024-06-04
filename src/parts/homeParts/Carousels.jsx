import Carousel from "react-bootstrap/Carousel";
import imageOne from "/images/other/imageOne.jpeg";
import imageThree from "/images/other/imageThree.jpeg";
import imageTwo from "/images/other/imageTwo.jpeg";
import { useState } from "react";

export const Carousel1 = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={imageOne} height="100%" />
        <Carousel.Caption>
          <h4 className="font-coursive text-4xl">Sale 30% off</h4>
          <h3 className="font-boldText font- bold text-5xl">
            A Wold Of Natural Flavor
          </h3>
          <p className="text-sm">
            Enjoy free delivery with min. purchase of{" "}
            <span className="font-bold">SALESUMMER30</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageTwo}
          alt="Second slide"
          height="100%"
        />
        <Carousel.Caption>
          <h4 className="font-coursive text-4xl ">Season Sale</h4>
          <h3 className="font-boldText font- bold text-5xl">
            Spice Season Returns
          </h3>
          <p className="text-sm">From cereal to noodle to the return!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageThree}
          alt="Third slide"
          height="100%"
        />
        <Carousel.Caption>
          <h3 className="font-boldText text-5xl">
            Subscribe to our newsletter!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
