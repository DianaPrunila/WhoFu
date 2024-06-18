import { useContext } from "react";
import limes from "/images/other/limes.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { PRODUCTS } from "../../public/products";
import { ShopContext } from "./context/ShopContext";
import { CartItem } from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <div className=" limes flex  ">
        <div className=" flex relative ">
          <h3 className="w-[300px] absolute sm:text-3xl md:text-3xl lg:text-5xl font-bold  text-navBg ml-9  sm:mt-3 mt-5  lg:pt-8 lg:pl-8">
            Cart
          </h3>
        </div>
        <img src={limes} alt="About" className="w-full " />
      </div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div>
                <div>
                  {PRODUCTS.map((p) => (
                    <CartItem data={p} />
                  ))}
                </div>
              </div>

              {/* {totalAmount > 0 ? ( */}
              <div className=" price flex justify-center text-bold ">
                <p className="text-3xl">Total price: </p>
                <p className="text-lightGreen text-3xl">{totalAmount} €</p>
              </div>
              <Link to="/CheckOut" className="no-underline">
                <div className="flex justify-center mt-4">
                  <button
                    className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-3xl rounded-full"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </Link>
              {/* ) : (
                <h1> Your Shopping Cart is Empty</h1>
              )} */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};
