import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Grains = () => {
  const [Grains, setGrains] = useState();
  const filterProd = () => {
    setGrains(PRODUCTS.filter((p) => p.category === "Grains"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Grains</h1>
      </div>

      <div className="products flex flex-wrap justify-center  gap-x-9 gap-y-8">
        {Grains && Grains.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Grains;
