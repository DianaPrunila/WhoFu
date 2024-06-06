import { Carousel1 } from "../parts/homeParts/Carousels";
// import Seller from "../parts/homeParts/Seller";
// import Slides from "../parts/homeParts/Slides";
import Slides2 from "../parts/homeParts/Slides2";
import Banner from "../parts/homeParts/Banner";
import "./Home.scss";
import Categories from "../parts/homeParts/Categories";
const Home = () => {
  return (
    <>
      <Carousel1 />
      <div>
        <h3 className="d-flex text-4xl  font-bold justify-center mt-5 mb-5">
          Top products
        </h3>
      </div>
      {/* <Slides /> */}
      <Slides2 />
      {/* <Seller /> */}
      <Categories />
      <Banner />
    </>
  );
};

export { Home };
