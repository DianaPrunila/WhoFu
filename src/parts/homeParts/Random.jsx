import { useDispatch } from "react-redux";
import { add, calculateTotalPrice } from "../../store/cartSlice";
import { PRODUCTS } from "../../../public/products";
const Random = () => {
  const randomWriting = {
    fontWeight: "bold",
    fontSize: "text-sm",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const randomIndex = Math.floor(Math.random() * PRODUCTS.length);
  const nameP = PRODUCTS[randomIndex].product_name;
  const priceP = PRODUCTS[randomIndex].price;
  const quantityP = PRODUCTS[randomIndex].quantity;
  const imageP = PRODUCTS[randomIndex].image;

  const dispatch = useDispatch();
  const adding = (data) => {
    dispatch(add(data));
    dispatch(calculateTotalPrice());
  };
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
              {priceP} €
            </p>
            <p className="p-0 m-0">{quantityP}</p>

            <button
              className="bottom-center p-2 rounded-xl mt-2 bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold "
              onClick={() => adding(PRODUCTS[randomIndex])}
              style={randomWriting}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Random;
