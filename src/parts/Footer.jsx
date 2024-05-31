import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Whofu
              </h6>
              <p>
                Delicious, organic food with less packaging, less food waste and
                lower food miles. What more do you need?
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">INFORMATION</h6>
              <p>
                <a href="../About" className="text-reset">
                  About us
                </a>
              </p>
              <p>
                <a href="../Blog" className="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="../Cart" className="text-reset">
                  Check out
                </a>
              </p>
              <p>
                <a href="../Contact" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p>
                <a href="../Fermented" className="text-reset">
                  Fermented Foods
                </a>
              </p>
              <p>
                <a href="../Fruits" className="text-reset">
                  Fruits
                </a>
              </p>
              <p>
                <a href="../Grains" className="text-reset">
                  Grains
                </a>
              </p>
              <p>
                <a href="../Legumes" className="text-reset">
                  Legumes
                </a>
              </p>
              <p>
                <a href="../Pasta" className="text-reset">
                  Pasta
                </a>
              </p>
              <p>
                <a href="../NutsSeeds" className="text-reset">
                  Nuts & Seeds
                </a>
              </p>
              <p>
                <a href="../Vegetables" className="text-reset">
                  Vegetables
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                support@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="/">
          WhoFu
        </a>
      </div>
    </MDBFooter>
  );
}
