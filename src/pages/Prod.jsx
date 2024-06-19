import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add, calculateTotals } from "../store/cartSlice";
import { useState } from "react";

export const Prod = (prop) => {
  const { product_name, price, image } = prop.data;
  const dispatch = useDispatch();
  // const [initValue, setInitValue] = useState(0);
  // const { products } = useSelector((store) => store.cart);

  const dispachAndFilter = (data) => {
    dispatch(add(data));
    dispatch(calculateTotals());
  };

  return (
    <div className="product flex mb-16">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          className=" h-[200px] object-cover"
        />
        <Card.Body className=" ">
          <Card.Title className="flex justify-center">
            {product_name}
          </Card.Title>
          <Card.Text className="flex justify-center">{price} € </Card.Text>
          <div className="flex  flex-col ">
            <button
              className="addToCartBttn px-2 py-2  bg-lightGreen 
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-xl rounded-lg"
              onClick={() => dispachAndFilter(prop.data)}
            >
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
