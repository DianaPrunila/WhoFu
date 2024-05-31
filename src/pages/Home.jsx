import { Carousel1 } from "../parts/homeParts/Carousels";
// import Seller from "../parts/homeParts/Seller";
import Slides from "../parts/homeParts/Slides";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Carousel1 />
      <div>
        <h3>Best Sellers</h3>
      </div>
      <Slides />
      {/* <Seller /> */}
    </>
  );
};

export { Home };
