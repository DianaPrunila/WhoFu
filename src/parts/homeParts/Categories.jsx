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

function AutoLayoutExample() {
  return (
    <Container className="m-10 p-0">
      <Row>
        <Col className="p-0">
          <img src={Vegetables} alt="" />
        </Col>
        <Col className="p-0">
          <img src={Fruits} alt="" />
        </Col>
        <Col className="p-0">
          <img src={Grains} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <img src={Legumes} alt="" />
        </Col>
        <Col className="p-0">
          <img src={NutsSeeds} alt="" />
        </Col>
        <Col className="p-0">
          <img src={PastaNoodles} alt="" />
        </Col>
        <Col className="p-0">
          <img src={Fermented} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
