import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fermented from "/images/foods/Fermented.jpg";
import Fruits from "/images/foods/Fruits.jpg";
import Grains from "/images/foods/Grains.jpg";
import Legumes from "/images/foods/Legumes.jpg";
import NutsSeeds from "/images/foods/NutsSeeds.webp";
import PastaNoodles from "/images/foods/PastaNoodles.jpg";
import Vegetables from "/images/foods/Vegetables.jpg";

function Categories() {
  return (
    <Container className="grid m-24 p-0">
      <Col className="grid">
        <Row className="p-0">
          <a href="./Vegetables">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={Vegetables}
                  alt="Vegetables"
                  className=" img-categories img-fluid ;"
                />
                <figcaption className="center text-white">
                  Vegetables
                </figcaption>
              </figure>
            </Container>
          </a>
        </Row>
        <Row className="p-0">
          <a href="./Grains">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={Grains}
                  alt="Grains"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">Grains</figcaption>
              </figure>
            </Container>
          </a>
        </Row>
        <Row className="p-0">
          <a href="./Pasta">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={PastaNoodles}
                  alt="Pasta & Noodles"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">
                  Pasta & Noodles
                </figcaption>
              </figure>
            </Container>
          </a>
        </Row>
      </Col>
      <Col className="grid">
        <Row className="p-0">
          <a href="./Fruits">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={Fruits}
                  alt="Fruit"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">Fruit</figcaption>
              </figure>
            </Container>
          </a>
        </Row>
        <Row className="p-0">
          <a href="./NutsSeeds">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={NutsSeeds}
                  alt="Nuts & Seeds"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">
                  Nuts & Seeds
                </figcaption>
              </figure>
            </Container>
          </a>
        </Row>
        <Row className="p-0">
          <a href="./Legumes">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={Legumes}
                  alt="Legumes"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">Legumes</figcaption>
              </figure>
            </Container>
          </a>
        </Row>
        <Row className="p-0">
          <a href="./Fermented">
            <Container className="p-0">
              <figure className="position-relative ">
                <img
                  src={Fermented}
                  alt="Fermented"
                  className=" img-categories img-fluid"
                />
                <figcaption className="center text-white">
                  Fermented foods
                </figcaption>
              </figure>
            </Container>
          </a>
        </Row>
      </Col>
    </Container>
  );
}

export default Categories;
