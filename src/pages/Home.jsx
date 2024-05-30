import { Carousel1 } from "../parts/homeParts/Carousels";
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
    </>
  );
};

export { Home };
