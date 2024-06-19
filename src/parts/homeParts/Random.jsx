import React from "react";

const Random = () => {
  const randomWriting = {
    fontWeight: "bold",
    fontSize: "text-sm",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const randomIndex = Math.floor(Math.random() * Card.length);
  const idP = Card[randomIndex].id;
  const nameP = Card[randomIndex].product_name;
  const categoryP = Card[randomIndex].category;
  const priceP = Card[randomIndex].price;
  const quantityP = Card[randomIndex].quantity;
  const imageP = Card[randomIndex].image;
  return (
    <>
      <h2 className="flex flex-col flex-wrap  mb-4 content-center text-bold">
        DEAL OF THE DAY
      </h2>
      <div className=" mb-4 d-flex flex-col flex-wrap  content-center">
        <div className="w-52 shadow-lg rounded-xl ">
          <div className="d-flex justify-center items-center ">
            <img
              src={imageP}
              alt={nameP}
              className="h-44 object-cover d-flex items-center rounded-xl mt-2"
            />
          </div>

          <div className="d-flex flex-col h-40 items-center pt-4 mb-2">
            <p className="p-0 m-0">{nameP}</p>
            <p className="text-lightGreen text-xl font-semibold p-0 m-0">
              {priceP}
            </p>
            <p className="p-0 m-0">{quantityP}</p>
            <a href="./Cart">
              <button
                className="bottom-center p-2 rounded-xl mt-2 bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold "
                style={randomWriting}
              >
                Add to cart
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Random;

const Card = [
  {
    id: 1,
    product_name: "Lentils",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/lentils.jpg",
  },
  {
    id: 2,
    product_name: "Chickpeas",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/chickpeas.jpg",
  },
  {
    id: 3,
    product_name: "Beans",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/beans.jpg",
  },
  {
    id: 4,
    product_name: "Oats",
    category: "Grains",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/oats.jpg",
  },
  {
    id: 5,
    product_name: "Bulgur",
    category: "Grains",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/bulgur.jpg",
  },
  {
    id: 6,
    product_name: "Quinoa",
    category: "Grains",
    price: "5.00 €",
    quantity: "1 kg",
    image: "./images/foods/quinoa.jpg",
  },
  {
    id: 7,
    product_name: "Spinach",
    category: "Vegetables",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/spinach.jpg",
  },
  {
    id: 8,
    product_name: "Broccoli",
    category: "Vegetables",
    price: "2.50 €",
    quantity: "1 kg",
    image: "./images/foods/broccoli.jpg",
  },
  {
    id: 9,
    product_name: "Carrots",
    category: "Vegetables",
    price: "1.00 €",
    quantity: "1 kg",
    image: "./images/foods/carrots.jpg",
  },
  {
    id: 10,
    product_name: "Avocado",
    category: "Fruits",
    price: "2.00 €",
    quantity: "each",
    image: "./images/foods/avocado.jpg",
  },
  {
    id: 11,
    product_name: "Strawberries",
    category: "Fruits",
    price: "3.00 €",
    quantity: "1 kg",
    image: "./images/foods/strawberries.jpg",
  },
  {
    id: 12,
    product_name: "Raspberries",
    category: "Fruits",
    price: "5.00 €",
    quantity: "1 kg",
    image: "./images/foods/raspberries.jpg",
  },
  {
    id: 13,
    product_name: "Tomato",
    category: "Vegetables",
    price: "3.19 €",
    quantity: "1 kg ",
    image: "./images/foods/tomatos.jpg",
  },
  {
    id: 14,
    product_name: "Cherries",
    category: "Fruits",
    price: "3.50 €",
    quantity: "1 kg",
    image: "./images/foods/cherry.jpg",
  },
  {
    id: 15,
    product_name: "Edamame",
    category: "Legumes",
    price: "2.50 €",
    quantity: "500 g",
    image: "./images/foods/edamame.jpg",
  },
  {
    id: 16,
    product_name: "Whole wheat pasta",
    category: "Pasta and Noodles",
    price: "2.00 €",
    quantity: "500 g",
    image: "./images/foods/edamame.jpg",
  },
  {
    id: 17,
    product_name: "Soba noodles",
    category: "Pasta and Noodles",
    price: "3.00 €",
    quantity: "300 g",
    image: "./images/foods/soba.jpg",
  },
  {
    id: 18,
    product_name: "Udon Noodles",
    category: "Pasta and Noodles",
    price: "3.50 €",
    quantity: "300 g",
    image: "./images/foods/udon.jpg",
  },
  {
    id: 19,
    product_name: "Kimchi",
    category: "Fermented Foods",
    price: "2.50 €",
    quantity: "500 g",
    image: "./images/foods/kimchi.jpg",
  },
  {
    id: 20,
    product_name: "Vegan yogurt",
    category: "Fermented Foods",
    price: "2.00 €",
    quantity: "150 g",
    image: "./images/foods/yogurt.webp",
  },
  {
    id: 21,
    product_name: "Miso",
    category: "Fermented Foods",
    price: "4.00 €",
    quantity: "200 g",
    image: "./images/foods/miso.jpg",
  },
];
