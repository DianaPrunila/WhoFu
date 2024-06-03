import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import banner from "/images/other/green.png";
const Banner = () => {
  return (
    <div>
      <Container className="ban w-11/12 p-0">
        <figure className="position-relative ">
          <img src={banner} alt="Banner" className="img-fluid h-1" />
          <figcaption className="center">
            Organic food is the best medicine for your body
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Banner;
