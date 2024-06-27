import { useState } from "react";
import {
  removeItem,
  increase,
  decrease,
  calculateTotalPrice,
} from "../store/cartSlice";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

// const totals = (data) => {
//   dispatch(calculateTotalPrice(data));
// };
// onClick={() => totals(prop.data)}

export const CartItem = (prop) => {
  const { id, product_name, price, image, quantityToBuy, quantity } = prop.data;
  // const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const increasing = (data) => {
    dispatch(increase(data));
    dispatch(calculateTotalPrice());
  };

  const decreasing = (data) => {
    dispatch(decrease(data));
    dispatch(calculateTotalPrice());
  };
  const removing = (data) => {
    dispatch(removeItem(data));
    dispatch(calculateTotalPrice());
  };
  return (
    <MDBCard className="rounded-3 mb-4">
      <MDBCardBody className="p-4">
        <MDBRow className="justify-content-between align-items-center">
          <MDBCol md="2" lg="2" xl="2">
            <MDBCardImage
              className="rounded-3 h-[200px]"
              fluid
              src={image}
              alt={product_name}
            />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3">
            <p className="lead fw-normal mb-2 text-bold">{product_name}</p>
            <p className="flex flex-col">
              <span className="text-muted">Price: {price} € </span>
              <span className="text-muted">Quantity: {quantity} </span>
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
              onClick={() => decreasing(prop.data)}
            >
              <MDBIcon fas icon="minus" />
            </MDBBtn>

            <MDBInput
              min={1}
              // type="number"
              // onChange={(e) => setValue(e.target.value)}
              value={quantityToBuy || 0}
              // readOnly
            />
            <MDBBtn
              color="link"
              className="px-2"
              onClick={() => increasing(prop.data)}
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
            <MDBTypography tag="h5" className="mb-0">
              {quantityToBuy * price} €
            </MDBTypography>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className="text-end">
            <MDBIcon
              fas
              icon="trash text-danger"
              size="lg"
              onClick={() => removing(prop.data)}
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};
