import React from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";
export const AllProducts = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>All Products</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((p) => (
          <Prod data={p} />
        ))}
      </div>
    </div>
  );
};
