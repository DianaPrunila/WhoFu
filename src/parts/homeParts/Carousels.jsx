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
          <h4>Sale 30% off</h4>
          <h3>A Wold Of Natural Flavor</h3>
          <p>Enjoy free delivery with min. purchase of SALESUMMER30</p>
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
          <h4>Season Sale</h4>
          <h3>Spice Season Returns</h3>
          <p>From cereal to noodle to the return!</p>
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
          <h3>Subscribe to our newsletter!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
