import React, { useEffect, useState } from "react";
import { increase, decrease, calculateTotalPrice } from "../store/cartSlice";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../public/products";
import { useDispatch } from "react-redux";
import { MDBBtn, MDBIcon, MDBInput, MDBTypography } from "mdb-react-ui-kit";

const SgProd = (prop) => {
  const dispatch = useDispatch();
  const increasing = (data) => {
    dispatch(increase(data));
    dispatch(calculateTotalPrice());
  };

  const decreasing = (data) => {
    dispatch(decrease(data));
    dispatch(calculateTotalPrice());
  };
  const param = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === parseInt(param.id));
    setProduct(foundProduct);
    console.log(typeof product.image);
  }, [param.id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product.quantityToBuy);
  console.log(product.quantity);
  console.log(product.data);

  return (
    <div className="global  flex flex-col flex-wrap content-center  ">
      <div className="w-3/4">
        <h1 className="flex justify-center m-4">{product.product_name}</h1>
        <div className="up flex flex-row justify-center">
          <div className="left-image mb-4">
            <img
              src={product.image}
              alt={product.quantity}
              className=" h-[400px] object-cover rounded-xl mr-7"
            />
          </div>
          <div className="right-details flex flex-col justify-center ">
            <div className=" details flex flex-col mb-4">
              <span className="text-muted">Price: {product.price} € </span>
              <span className="text-muted">Quantity: {product.quantity} </span>
            </div>
            <div
              md="3"
              lg="3"
              xl="2"
              className=" quantity d-flex align-items-center justify-content-around mb-4"
            >
              <MDBBtn
                color="light"
                className="px-2 text-success"
                onClick={() => decreasing(product.data)}
              >
                <MDBIcon fas icon="minus" />
              </MDBBtn>

              <MDBInput
                min="1"
                className="px-0"
                value={product.quantityToBuy}
              />
              <MDBBtn
                color="light"
                className="px-2 text-success"
                onClick={() => increasing(product.data)}
              >
                <MDBIcon icon="plus" />
              </MDBBtn>
            </div>
            <div md="3" lg="2" xl="2" className=" price ">
              <MDBTypography tag="h5" className="mb-0">
                {product.quantityToBuy * product.price} €
              </MDBTypography>
            </div>
          </div>
        </div>
        <div className="down flex flex-col  content-center mb-4">
          <h4 className="flex justify-center mb-4">Description</h4>

          <p className="flex mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupit non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SgProd;
