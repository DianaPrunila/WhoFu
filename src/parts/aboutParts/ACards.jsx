import React from "react";
import Container from "react-bootstrap/Container";
const ACards = () => {
  const cards = [
    {
      title: "Who We are",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./images/other/weAre.jpg",
    },
    {
      title: "Our Products",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./images/other/ourProducts.jpg",
    },
    {
      title: "How We Work",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./images/other/work.jpg",
    },
  ];
  return (
    <>
      <Container className=" mb-4 p-0 ">
        <div className="flex p-0   ">
          {cards.map((c) => (
            <Container className="p-0 ">
              <figure className=" m-2 p-0 ">
                <img src={c.image} alt={c.title} className="p-0  ;" />
                <h6 className="text-bold  text-navBg mt-2 mb-2 flex justify-center">
                  {c.title}
                </h6>
                <p className=" m-1 text-center">{c.text}</p>
              </figure>
            </Container>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ACards;
