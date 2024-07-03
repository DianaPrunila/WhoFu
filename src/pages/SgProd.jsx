import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../public/products"; // Adjust the path accordingly

const SgProd = (prop) => {
  const param = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === parseInt(param.id));
    setProduct(foundProduct);
  }, [param.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{product.product_name}</h1>
        <img src={product.image} alt={product.product_name} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default SgProd;
