import limes from "/images/other/limes.png";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import PopUp from "../parts/PopUp";

const CheckOut = () => {
  return (
    <div>
      <div className="TopBanner flex mb-5">
        <div className=" flex relative ">
          <h3 className="w-[300px] absolute sm:text-3xl md:text-3xl lg:text-5xl font-bold  text-navBg ml-9  sm:mt-3 mt-5  lg:pt-8 lg:pl-8">
            Checkout
          </h3>
        </div>
        <img src={limes} alt="About" className="w-full " />
      </div>
      <div className="flex justify-around">
        <div className=" w-8/12 flex flex-col">
          <div className="details flex justify-center">
            <h3 className="text-bold text-navBg mb-4"> Billing details</h3>
          </div>
          <form className="forms flex-col flex">
            <MDBRow className="mb-4 flex flex-wrap">
              <MDBCol>
                <MDBInput
                  className="h-10"
                  id="form6Example1"
                  label="First name"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  className="h-10"
                  id="form6Example2"
                  label="Last name"
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              className="h-10"
              wrapperClass="mb-4"
              id="form6Example3"
              label="Company name (optional)"
            />
            <MDBInput
              className="h-10"
              wrapperClass="mb-4"
              id="form6Example4"
              label="Address"
            />{" "}
            <MDBInput
              className="h-10"
              wrapperClass="mb-4"
              type="email"
              id="form6Example5"
              label="Email"
            />
            <MDBInput
              className="h-10"
              wrapperClass="mb-4"
              type="tel"
              id="form6Example6"
              label="Phone"
            />
          </form>
          <div className="details">
            <p className="text-bold text-navBg">Additional information</p>
          </div>
          <form>
            <MDBInput
              className="h-10"
              wrapperClass="mb-4"
              textarea
              id="form6Example7"
              rows={4}
              label="Order notes (optional)"
            />
          </form>
          <div className="flex justify-center my-4">
            <PopUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
