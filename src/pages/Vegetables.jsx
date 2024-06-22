import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Vegetables = () => {
  const [Vegetables, setVegetables] = useState();
  const filterProd = () => {
    setVegetables(PRODUCTS.filter((p) => p.category === "Vegetables"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Vegetables </h1>
      </div>

      <div className="products flex flex-wrap justify-center  gap-x-9 gap-y-8">
        {Vegetables && Vegetables.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Vegetables;
