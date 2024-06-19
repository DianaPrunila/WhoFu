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
    <div className="product ">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          className="h-[300px] object-cover"
        />
        <Card.Body className=" ">
          <Card.Title className="flex justify-center">
            {product_name}
          </Card.Title>
          <Card.Text className="flex justify-center">{price}</Card.Text>
          <button
            className="addToCartBttn p-2 rounded-xl  flex justify-center
                    hover:bg-lightGreen hover:text-white text-navBg active:bg-lightGreen text-bold"
            onClick={() => dispachAndFilter(prop.data)}
          >
            Add To Cart
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};
