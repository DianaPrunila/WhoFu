import aboutUs from "/images/other/aboutUs.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const TopBanner = () => {
  return (
    <Container className=" flex p-0 m-0 ">
      <div className="flex relative  ">
        <img src={aboutUs} alt="About" className=" " />
        <div className="absolute">
          <p className="text-5xl font-bold  text-navBg ml-9 mt-5 lg:text-5xl lg:pt-8 lg:pl-8">
            About us
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TopBanner;
