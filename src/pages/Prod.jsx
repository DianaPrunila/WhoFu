import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add, calculateTotalPrice } from "../store/cartSlice";
import { Link } from "react-router-dom";

export const Prod = (prop) => {
  const { product_name, price, image, id } = prop.data;
  const dispatch = useDispatch();
  const adding = (data) => {
    dispatch(add(data));
    dispatch(calculateTotalPrice());
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
          <Card.Text className="flex justify-center flex-col">
            <p> {price} € </p>
            <p>
              <Link to={String(id)}>Details</Link>
            </p>
          </Card.Text>
          <div className="flex  flex-col ">
            <button
              className="addToCartBttn px-2 py-2  bg-lightGreen 
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-xl rounded-lg"
              onClick={() => adding(prop.data)}
            >
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
