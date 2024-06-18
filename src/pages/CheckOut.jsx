import React from "react";
import limes from "/images/other/limes.png";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

const CheckOut = () => {
  return (
    <>
      <div className="TopBanner flex mb-5">
        <div className=" flex relative ">
          <h3 className="w-[300px] absolute sm:text-3xl md:text-3xl lg:text-5xl font-bold  text-navBg ml-9  sm:mt-3 mt-5  lg:pt-8 lg:pl-8">
            Checkout
          </h3>
        </div>
        <img src={limes} alt="About" className="w-full " />
      </div>
      <div className="global w-8/12 flex flex-col">
        <div className="details flex justify-center">
          <p className="text-bold text-navBg ">Billing details</p>
        </div>
        <form className="forms flex-col flex">
          <MDBRow className="mb-4 flex flex-wrap">
            <MDBCol>
              <MDBInput id="form6Example1" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form6Example2" label="Last name" />
            </MDBCol>
          </MDBRow>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example3"
            label="Company name (optional)"
          />
          <MDBInput wrapperClass="mb-4" id="form6Example4" label="Address" />{" "}
          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label="Email"
          />
          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Phone"
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Additional information"
          />
        </form>
        <div className="details">
          <p className="text-bold text-navBg">Additional information</p>
        </div>
        <form>
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Order notes (optional)"
          />
        </form>
        <div className="flex justify-center my-4">
          <button
            className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-2xl rounded-full"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
