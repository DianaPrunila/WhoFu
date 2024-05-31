import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 outline-black">
        <Slider {...settings}>
          {preview.map((p) => (
            <div className=" h-[450px] rounded-xl ">
              <div className=" bg-lime-100 h-56  flex justify-center items-center rounded-t-xl">
                <img
                  src={p.image}
                  alt={p.product_name}
                  className="h-44 w-44 rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p>{p.product_name}</p>
                <p className="text-lime-600 text-xl font-semibold">{p.price}</p>
                <button className="">Add to cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const preview = [
  {
    id: 1,
    product_name: "Lentils",
    category: "Legumes",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/lentils.png",
  },
  {
    id: 4,
    product_name: "Oats",
    category: "Grains",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/oats.png",
  },
  {
    id: 7,
    product_name: "Spinach",
    category: "Vegetables",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/spinach.png",
  },
  {
    id: 11,
    product_name: "Strawberries",
    category: "Fruits",
    price: "3.00 €",
    quantity: "1 kg",
    image: "./images/foods/strawberries.png",
  },
  {
    id: 16,
    product_name: "Whole wheat pasta",
    category: "Pasta and Noodles",
    price: "2.00 €",
    quantity: "500 g",
    image: "./images/foods/pasta.png",
  },
  {
    id: 19,
    product_name: "Kimchi",
    category: "Fermented Foods",
    price: "2.50 €",
    quantity: "500 g",
    image: "./images/foods/kimchi.png",
  },
];

export default Slides;
