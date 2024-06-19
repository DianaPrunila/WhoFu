import React, { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext";
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

export const CartItem = (props) => {
  const { id, product_name, price, image } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const cartItemAmount = cartItems[id];
  const [value, setValue] = useState("");

  return (
    <MDBCard className="rounded-3 mb-4">
      <MDBCardBody className="p-4">
        <MDBRow className="justify-content-between align-items-center">
          <MDBCol md="2" lg="2" xl="2">
            <MDBCardImage
              className="rounded-3 "
              fluid
              src={image}
              alt={product_name}
            />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3">
            <p className="lead fw-normal mb-2 text-bold">{product_name}</p>
            <p>
              <span className="text-muted">Price: {price} € </span>
            </p>
          </MDBCol>
          <MDBCol
            md="3"
            lg="3"
            xl="2"
            className="d-flex align-items-center justify-content-around"
          >
            <MDBBtn
              color="link"
              className="px-2 "
              onClick={() => {
                removeFromCart();
              }}
            >
              <MDBIcon fas icon="minus" />
            </MDBBtn>

            <MDBInput
              min={0}
              type="number"
              value={cartItemAmount}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* {cartItemAmount > 0 && <> ({cartItemAmount})</>} */}
            <MDBBtn
              color="link"
              className="px-2 "
              onClick={() => {
                addToCart();
              }}
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
            <MDBTypography tag="h5" className="mb-0">
              {totalAmount}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className="text-end">
            <a href="#!" className="text-danger">
              <MDBIcon fas icon="trash text-danger" size="lg" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};
