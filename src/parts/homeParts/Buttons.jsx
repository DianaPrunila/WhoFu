import Button from "react-bootstrap/Button";
import { FaCarrot } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { GiGrain } from "react-icons/gi";
import { LuNut } from "react-icons/lu";
import { MdOutlineGrain } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";

const CategoryButtons = () => {
  return (
    <div className="d-flex justify-content:space-evenly">
      {" "}
      <Button href="AllProducts">
        <MdFoodBank />
        All Products
      </Button>
      <Button href="NutsSeeds">
        <LuNut />
        Nuts & Seeds
      </Button>
      <Button href="Fruits">
        <FaApple />
        Fruits
      </Button>
      <Button href="Vegetables">
        <FaCarrot />
        Vegetables{" "}
      </Button>
      <Button href="Legumes">
        <MdOutlineGrain />
        Legumes
      </Button>
      <Button hrf="Grains">
        {" "}
        <GiGrain />
        Grains
      </Button>
      <Button href="LegumeProducts">Legume-based Products</Button>
    </div>
  );
};

export default CategoryButtons;
