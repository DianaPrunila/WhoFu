import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import banner from "/images/other/banner.png";
const Banner = () => {
  return (
    <div>
      <Container className="ban w-11/12 p-0 mb-4" style={{ height: "280px" }}>
        <figure className="position-relative ">
          <img src={banner} alt="Banner" className=" ban w-11/12 img-fluid" />
          <figcaption className="center text-3xl font-bold text-center">
            "Organic food is the best medicine for your body"
            <p className="cap text-sm font-normal">EST HABECO CETEROS</p>
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Banner;
