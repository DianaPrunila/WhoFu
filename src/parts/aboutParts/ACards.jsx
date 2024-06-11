import React from "react";

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
      <div className=" mb-4 p-0 flex justify-center  ">
        <div className="flex p-0 w-11/12 ">
          {cards.map((c) => (
            <div className="p-0 ">
              <div className="p-0 h">
                <img
                  src={c.image}
                  alt={c.title}
                  className="p-0  hover:animate-bounce rounded-md w-80 h-56 mb-3 ;"
                />
                <h6 className="text-bold  text-navBg mt-2 mb-2 flex justify-center ">
                  {c.title}
                </h6>
                <p className="  text-center">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ACards;
