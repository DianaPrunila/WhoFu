import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

export default function PopUp() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <>
      <button
        onClick={toggleOpen}
        className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-2xl rounded-full"
      >
        Place order
      </button>
      <MDBModal
        tabIndex="-1"
        open={centredModal}
        onClose={() => setCentredModal(false)}
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalBody>
              <div className="x flex justify-end">
                <MDBBtn
                  className="btn-close "
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </div>

              <MDBModalTitle className="flex flex-wrap justify-center mb-4">
                CONGRATULATIONS ON YOUR PURCHASE!
              </MDBModalTitle>
              <div className="buttons flex justify-around">
                <Link to="/" className="no-underline">
                  <div className="flex ">
                    <button
                      className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-xl rounded-full"
                    >
                      HOME
                    </button>
                  </div>
                </Link>
                <Link to="/Cart" className="no-underline">
                  <div className="flex ">
                    <button
                      className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-xl rounded-full"
                    >
                      CART
                    </button>
                  </div>
                </Link>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
