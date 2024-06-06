import { Carousel1 } from "../parts/homeParts/Carousels";
import Parallax from "../parts/homeParts/Parallax";
// import Slides from "../parts/homeParts/Slides";
import Slides2 from "../parts/homeParts/Slides2";
import Banner from "../parts/homeParts/Banner";
import "./Home.scss";
import Categories from "../parts/homeParts/Categories";
import Random from "../parts/homeParts/Random";
const Home = () => {
  return (
    <>
      <Carousel1 />
      {/* <Slides /> */}
      <Slides2 />
      <Random />
      <Categories />
      <Parallax />
      <Banner />
    </>
  );
};

export { Home };
