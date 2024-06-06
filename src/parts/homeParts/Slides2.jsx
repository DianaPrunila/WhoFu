import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/lentils.jpg",
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
    id: 7,
    product_name: "Spinach",
    category: "Vegetables",
    price: "2.00 €",
    quantity: "1 kg",
    image: "./images/foods/spinach.jpg",
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
    id: 16,
    product_name: "Whole wheat pasta",
    category: "Pasta and Noodles",
    price: "2.00 €",
    quantity: "500 g",
    image: "./images/foods/pasta.jpg",
  },
  {
    id: 19,
    product_name: "Kimchi",
    category: "Fermented Foods",
    price: "2.50 €",
    quantity: "500 g",
    image: "./images/foods/kimchi.jpg",
  },
];
const sliderWriting = {
  fontWeight: "bold",
  fontSize: "14px",
  fontFamily: "sans-serif",
  textAlign: "center",
};
const Slides2 = () => {
  return (
    <div className="w-11/12  m-auto mb-8">
      <Carousel
        swipeable={true}
        draggable={true}
        infinite={true}
        responsive={responsive}
      >
        {preview.map((p) => (
          <div className=" ">
            <div className="d-flex justify-center items-center ">
              <a href="">
                <img
                  src={p.image}
                  alt={p.product_name}
                  className="h-44 w-44 d-flex items-center rounded-xl"
                />
              </a>
            </div>

            <div className="d-flex flex-col  items-center pt-4 ">
              <p className="p-0 m-0">{p.product_name}</p>
              <p className="text-lightGreen text-xl font-semibold p-0 m-0">
                {p.price}
              </p>
              <p className="p-0 m-0">{p.quantity}</p>
              <a href="./Cart">
                <button
                  className=" text-slate-950 hover:text-lightGreen "
                  style={sliderWriting}
                >
                  Add to cart
                </button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slides2;
