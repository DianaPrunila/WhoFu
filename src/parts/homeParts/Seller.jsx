const Seller = () => {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.random((p) => (
          <div className=" h-[450px]">
            <div className="h-56 bg-lime-100 flex justify-center items-center">
              <img src={p.image} alt={p.product_name} className="h-44 w-44" />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p>{p.product_name}</p>
              <p className="text-lime-600 text-xl font-semibold">{p.price}</p>
              <button className="">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const data = [
  {
    id: 1,
    product_name: "Lentils",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/lentils.png",
  },
  {
    id: 2,
    product_name: "Chickpeas",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/chickpeas.png",
  },
  {
    id: 3,
    product_name: "Beans",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/beans.png",
  },
  {
    id: 4,
    product_name: "Oats",
    category: "Grains",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/oats.png",
  },
  {
    id: 5,
    product_name: "Bulgur",
    category: "Grains",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/bulgur.png",
  },
  {
    id: 6,
    product_name: "Quinoa",
    category: "Grains",
    price: "5.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/quinoa.jpg",
  },
  {
    id: 7,
    product_name: "Spinach",
    category: "Vegetables",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/spinach.png",
  },
  {
    id: 8,
    product_name: "Broccoli",
    category: "Vegetables",
    price: "2.50 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/broccoli.png",
  },
  {
    id: 9,
    product_name: "Carrots",
    category: "Vegetables",
    price: "1.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/carrots.png",
  },
  {
    id: 10,
    product_name: "Avocado",
    category: "Fruits",
    price: "2.00 €",
    quantity: "each",
    image: "./src/assets/images/foods/avocado.png",
  },
  {
    id: 11,
    product_name: "Strawberries",
    category: "Fruits",
    price: "3.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/strawberries.png",
  },
  {
    id: 12,
    product_name: "Raspberries",
    category: "Fruits",
    price: "5.00 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/raspberries.png",
  },
  {
    id: 13,
    product_name: "Tomato",
    category: "Vegetables",
    price: "3.19 €",
    quantity: "1 kg ",
    image: "./src/assets/images/foods/tomato.png",
  },
  {
    id: 14,
    product_name: "Cherries",
    category: "Fruits",
    price: "3.50 €",
    quantity: "1 kg",
    image: "./src/assets/images/foods/cherry.png",
  },
  {
    id: 15,
    product_name: "Edamame",
    category: "Legumes",
    price: "2.50 €",
    quantity: "500 g",
    image: "./src/assets/images/foods/edamame.png",
  },
  {
    id: 16,
    product_name: "Whole wheat pasta",
    category: "Pasta and Noodles",
    price: "2.00 €",
    quantity: "500 g",
    image: "./src/assets/images/foods/edamame.png",
  },
  {
    id: 17,
    product_name: "Soba noodles",
    category: "Pasta and Noodles",
    price: "3.00 €",
    quantity: "300 g",
    image: "./src/assets/images/foods/soba.jpg",
  },
  {
    id: 18,
    product_name: "Udon Noodles",
    category: "Pasta and Noodles",
    price: "3.50 €",
    quantity: "300 g",
    image: "./src/assets/images/foods/udon.png",
  },
  {
    id: 19,
    product_name: "Kimchi",
    category: "Fermented Foods",
    price: "2.50 €",
    quantity: "500 g",
    image: "./src/assets/images/foods/kimchi.png",
  },
  {
    id: 20,
    product_name: "Vegan yogurt",
    category: "Fermented Foods",
    price: "2.00 €",
    quantity: "150 g",
    image: "./src/assets/images/foods/yogurt.png",
  },
  {
    id: 21,
    product_name: "Miso",
    category: "Fermented Foods",
    price: "4.00 €",
    quantity: "200 g",
    image: "./src/assets/images/foods/miso.jpg",
  },
];

export default Seller;