import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShopContext } from "./context/ShopContext.jsx";
import { useContext } from "react";

export const Prod = (prop) => {
  const { id, product_name, price, image } = prop.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className=" ">
          <Card.Title className="flex justify-center">
            {product_name}
          </Card.Title>
          <Card.Text className="flex justify-center">{price}</Card.Text>
          <button
            className="addToCartBttn p-2 rounded-xl  flex justify-center
                    hover:bg-lightGreen hover:text-white text-navBg active:bg-lightGreen text-bold"
            onClick={() => addToCart(id)}
          >
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};
