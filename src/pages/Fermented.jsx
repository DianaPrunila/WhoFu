import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Fermented = () => {
  const [fermented, setFermented] = useState();
  const filterProd = () => {
    setFermented(PRODUCTS.filter((p) => p.category === "Fermented Foods"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Fermented</h1>
      </div>

      <div className="products flex flex-wrap justify-center w-11/12 gap-x-9 gap-y-8">
        {fermented && fermented.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Fermented;
