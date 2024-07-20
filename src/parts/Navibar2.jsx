import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Navibar2() {
  const [openNavNoToggler, setOpenNavNoToggler] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" className="bg-navBg">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoToggler(!openNavNoToggler)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoToggler}>
            <MDBNavbarBrand href="/" className="text-white">
              WhoFu
            </MDBNavbarBrand>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/"
                  className="text-white"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="About"
                  className="text-white"
                >
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="Contact"
                  className="text-white"
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <input
                className="form-control"
                // placeholder="Type query"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn outline className="text-white">
                Search
              </MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
