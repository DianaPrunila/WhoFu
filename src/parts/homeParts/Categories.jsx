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
    <Container className="m-10 p-0">
      <Row>
        <Col className="p-0">
          <a href="./Vegetables">
            <Container>
              <figure className="position-relative ">
                <img src={Vegetables} alt="Vegetables" className="img-fluid" />
                <figcaption className="center text-white">
                  Vegetables
                </figcaption>
              </figure>
            </Container>
          </a>
        </Col>
        <Col className="p-0">
          <a href="./Grains">
            <Container>
              <figure className="position-relative ">
                <img src={Grains} alt="Grains" className="img-fluid" />
                <figcaption className="center text-white">Grains</figcaption>
              </figure>
            </Container>
          </a>
        </Col>
        <Col className="p-0">
          <a href="./Pasta">
            <Container>
              <figure className="position-relative ">
                <img
                  src={PastaNoodles}
                  alt="Pasta & Noodles"
                  className="img-fluid"
                />
                <figcaption className="center text-white">
                  Pasta & Noodles
                </figcaption>
              </figure>
            </Container>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <a href="./Fruits">
            <Container>
              <figure className="position-relative ">
                <img src={Fruits} alt="Fruit" className="img-fluid" />
                <figcaption className="center text-white">Fruit</figcaption>
              </figure>
            </Container>
          </a>
        </Col>
        <Col className="p-0">
          <a href="./NutsSeeds">
            <Container>
              <figure className="position-relative ">
                <img src={NutsSeeds} alt="Nuts & Seeds" className="img-fluid" />
                <figcaption className="center text-white">
                  Nuts & Seeds
                </figcaption>
              </figure>
            </Container>
          </a>
        </Col>
        <Col className="p-0">
          <a href="./Legumes">
            <Container>
              <figure className="position-relative ">
                <img src={Legumes} alt="Legumes" className="img-fluid" />
                <figcaption className="center text-white">Legumes</figcaption>
              </figure>
            </Container>
          </a>
        </Col>
        <Col className="p-0">
          <a href="./Fermented">
            <Container>
              <figure className="position-relative ">
                <img src={Fermented} alt="Fermented" className="img-fluid" />
                <figcaption className="center text-white">
                  Fermented foods
                </figcaption>
              </figure>
            </Container>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
