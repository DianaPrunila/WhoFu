import React from "react";

export const Prod = (props) => {
  const { id, product_name, price, image } = props.data;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="description">
        <p>
          <b>{product_name}</b>
        </p>
        <p>{price}</p>
      </div>
    </div>
  );
};
