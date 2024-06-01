import { Carousel1 } from "../parts/homeParts/Carousels";
// import Seller from "../parts/homeParts/Seller";
import Slides from "../parts/homeParts/Slides";
import Banner from "../parts/homeParts/Banner";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Carousel1 />
      <div>
        <h3 className="d-flex justify-center mt-5">Top products</h3>
      </div>
      <Slides />
      {/* <Seller /> */}
      <Banner />
    </>
  );
};

export { Home };
