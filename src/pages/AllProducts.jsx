import React from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

export const AllProducts = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">All Products</h1>
      </div>

      <div className="products flex flex-wrap justify-center w-11/12 gap-x-9 gap-y-8">
        {PRODUCTS.map((p) => (
          <div>
            <Prod data={p} />
          </div>
        ))}
      </div>
    </div>
  );
};
