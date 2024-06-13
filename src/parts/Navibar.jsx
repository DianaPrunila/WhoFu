import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";

function NaviBar() {
  const naviWriting = {
    color: "white",
    fontWeight: "bold",
    fontSize: "text-sm",
    fontFamily: "sans-serif",
  };
  return (
    <Navbar expand="lg" className="bg-navBg">
      <Container fluid className="w-full">
        <Navbar.Brand style={naviWriting} href="/">
          WhoFu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className=" bg-blue-600" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 w-full flex justify-around"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="first3Buttons d-flex">
              <Nav.Link style={naviWriting} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={naviWriting} href="About">
                About
              </Nav.Link>
              <Nav.Link style={naviWriting} href="Contact">
                Contact
              </Nav.Link>
            </div>

            <div className=" searchLast3Bottons d-flex ">
              <Form className=" form d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  style={{ borderRadius: "50px" }}
                  aria-label="Search"
                />
                {/* <Button variant=" outline-light " sstyle={naviWriting}>
                  Search
                </Button> */}
              </Form>

              <div className="last3Buttons d-flex ">
                {/* <Nav.Link style={naviWriting} href="/Profile">
                  <FaRegUser />
                </Nav.Link> */}
                <Nav.Link style={naviWriting} href="/AllProducts">
                  <GrFavorite />
                </Nav.Link>
                <Nav.Link style={naviWriting} href="Cart">
                  <BsCart2 />
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
