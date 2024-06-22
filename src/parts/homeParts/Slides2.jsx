import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { add, calculateTotals } from "../../store/cartSlice";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const preview = [
  {
    id: 1,
    product_name: "Lentils",
    category: "Legumes",
    price: 2,
    quantityToBuy: 0,
    quantity: "1 kg",
    image: "./images/foods/lentils.jpg",
  },
  {
    id: 4,
    product_name: "Oats",
    category: "Grains",
    price: 2,
    quantityToBuy: 0,
    quantity: "1 kg",
    image: "./images/foods/oats.jpg",
  },
  {
    id: 7,
    product_name: "Spinach",
    category: "Vegetables",
    price: 2,
    quantityToBuy: 0,
    quantity: "1 kg",
    image: "./images/foods/spinach.jpg",
  },
  {
    id: 11,
    product_name: "Strawberries",
    category: "Fruits",
    price: 2,
    quantityToBuy: 0,
    quantity: "1 kg",
    image: "./images/foods/strawberries.jpg",
  },
  {
    id: 16,
    product_name: "Whole wheat pasta",
    category: "Pasta and Noodles",
    price: 2,
    quantityToBuy: 0,
    quantity: "500 g",
    image: "./images/foods/pasta.jpg",
  },
  {
    id: 19,
    product_name: "Kimchi",
    category: "Fermented Foods",
    price: 2,
    quantityToBuy: 0,
    quantity: "500 g",
    image: "./images/foods/kimchi.jpg",
  },
];
const sliderWriting = {
  fontWeight: "bold",
  fontSize: "text-sm",
  fontFamily: "sans-serif",
  textAlign: "center",
};
const Slides2 = () => {
  const dispatch = useDispatch();
  const adding = (data) => {
    dispatch(add(data));
    dispatch(calculateTotals());
  };
  return (
    <div className="slides2 ">
      <h2 className="d-flex justify-center text-bold mb-4 ">TOP PRODUCTS</h2>
      <div className="  mx-32 ">
        <Carousel
          swipeable={true}
          draggable={true}
          infinite={true}
          responsive={responsive}
          className=""
        >
          {preview.map((p) => (
            <div key={p.id} className="w-52  mb-4 shadow-md rounded-xl  ">
              <div className="flex justify-center items-center ">
                <img
                  src={p.image}
                  alt={p.product_name}
                  className="h-44 object-cover flex items-center rounded-xl mt-2"
                />
              </div>

              <div className="flex flex-col h-44 items-center pt-4 ">
                <p className="p-0 m-0">{p.product_name}</p>
                <p className="text-lightGreen text-xl font-semibold p-0 m-0">
                  {p.price} €
                </p>
                <p className="p-0 m-0">{p.quantity}</p>

                <button
                  className="addToCartBttn bottom-center mt-3 p-2 rounded-xl  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold"
                  onClick={() => adding(p)}
                  style={sliderWriting}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slides2;
