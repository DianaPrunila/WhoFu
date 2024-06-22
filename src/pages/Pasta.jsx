import { useEffect, useState } from "react";
import { PRODUCTS } from "../../public/products";
import { Prod } from "./Prod";

const Pasta = () => {
  const [Pasta, setPasta] = useState();
  const filterProd = () => {
    setPasta(PRODUCTS.filter((p) => p.category === "Pasta and Noodles"));
  };

  useEffect(() => {
    filterProd();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="flex justify-center my-5">Pasta and Noodles</h1>
      </div>

      <div className="products flex flex-wrap justify-center  gap-x-9 gap-y-8">
        {Pasta && Pasta.map((f, i) => <Prod data={f} key={i} />)}
      </div>
    </div>
  );
};

export default Pasta;
