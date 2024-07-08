import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted w-full  pt-1 mb-0"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Whofu
              </h6>
              <p style={{ marginBottom: "0px" }}>
                Delicious, organic food with less packaging, less food waste and
                lower food miles. What more do you need?
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">INFORMATION</h6>
              <p style={{ marginBottom: "0px" }}>
                <a href="../About" className="text-reset">
                  About us
                </a>
              </p>

              <p style={{ marginBottom: "0px" }}>
                <a href="../Contact" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p style={{ marginBottom: "0px" }}>
                <a href="../AllProducts" className="text-reset">
                  All Products
                </a>
              </p>
              <p style={{ marginBottom: "0px" }}>
                <a href="../Fermented" className="text-reset">
                  Fermented Foods
                </a>
              </p>
              <p style={{ marginBottom: "0px" }}>
                <a href="../Fruits" className="text-reset">
                  Fruits
                </a>
              </p>
              <p style={{ marginBottom: "0px" }}>
                <a href="../Grains" className="text-reset">
                  Grains
                </a>
              </p>
              <p style={{ marginBottom: "0px" }}>
                <a href="../Legumes" className="text-reset">
                  Legumes
                </a>
              </p>

              <p style={{ marginBottom: "0px" }}>
                <a href="../Pasta" className="text-reset">
                  Pasta
                </a>
              </p>
              <p style={{ marginBottom: "0px" }}>
                <a href="../Vegetables" className="text-reset  ">
                  Vegetables
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto  mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p style={{ marginBottom: "0px" }}>
                <MDBIcon icon="home" className="me-2" />
                Vienna, W 10012
              </p>
              <p style={{ marginBottom: "0px" }}>
                <MDBIcon icon="envelope" className="me-3" />
                support@example.com
              </p>
              <p style={{ marginBottom: "0px" }}>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p style={{ marginBottom: "0px" }}>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-reset fw-bold no-underline" href="/">
          WhoFu
        </Link>
      </div>
    </MDBFooter>
  );
}
