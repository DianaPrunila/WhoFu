import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";

function NaviBar() {
  return (
    <Navbar expand="lg" className="bg-green-700 bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">WhoFu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="first3Buttons d-flex">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </div>

            <Form className=" form d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>

            <div className="last3Buttons d-flex ">
              <Nav.Link href="/Profile">
                <FaRegUser />
              </Nav.Link>
              <Nav.Link href="Favorites">
                <GrFavorite />
              </Nav.Link>
              <Nav.Link href="Cart">
                <BsCart2 />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
