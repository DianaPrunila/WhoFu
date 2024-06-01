import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const Banner = () => {
  return (
    <div>
      <Container className=" ban h-1/5 w-11/12">
        <figure className="position-relative ">
          <img
            src="./images/other/green.png"
            alt="Banner"
            className="img-fluid "
          />
          <figcaption className="center">
            Organic food is the best medicine for your body
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Banner;
