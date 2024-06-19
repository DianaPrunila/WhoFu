import { Link } from "react-router-dom";

const CartBtn = () => {
  return (
    <Link to="./CheckOut.jsx" className="no-underline">
      <div className="flex justify-center mt-4">
        <button
          className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-3xl rounded-full"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </Link>
  );
};

export default CartBtn;
