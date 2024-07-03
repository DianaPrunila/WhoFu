import React, { useContext } from "react";
import { PRODUCTS } from "../../public/products";

import { Link } from "react-router-dom";

const List = (prop) => {
  const { product_name, price, image } = prop.data;
  return (
    <div>
      {PRODUCTS.map((p) => {
        return (
          <div key={p.id}>
            <p>{p.product_name}</p>
            <Link to="/List">Details</Link>
          </div>
        );
      })}
      s
    </div>
  );
};

export default List;
