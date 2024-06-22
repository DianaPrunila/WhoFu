import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Legumes = () => {
  const [Legumes, setLegumes] = useState();
  const filterProd = () => {
    setLegumes(PRODUCTS.filter((p) => p.category === "Legumes"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Legumes</h1>
      </div>

      <div className="products flex flex-wrap justify-center  gap-x-9 gap-y-8">
        {Legumes && Legumes.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Legumes;
