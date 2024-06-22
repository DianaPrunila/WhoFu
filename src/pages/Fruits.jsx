import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Fruits = () => {
  const [Fruits, setFruits] = useState();
  const filterProd = () => {
    setFruits(PRODUCTS.filter((p) => p.category === "Fruits"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Fruits</h1>
      </div>

      <div className="products flex flex-wrap justify-center  gap-x-9 gap-y-8">
        {Fruits && Fruits.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Fruits;
