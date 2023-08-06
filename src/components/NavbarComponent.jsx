import { useState, useEffect } from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBgColor();
    window.addEventListener("scroll", changeBgColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="brand fs-3 fw-bold">
            Kaos<span>Sablon</span>.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center tombolpesan">
              <a
                target="_blank"
                className="btn btn-outline-danger"
                href="https://wa.me/6289620550512?text=Assalamu%27alaikum%2C%20perkenalkan%20nama%20saya ..."
              >
                Pesan Sekarang
              </a>
            </div>
          </Navbar.Collapse>
          {/* <div className="mx-4 py-2 px-3 shop-bag">
            <i className="fa-solid fa-bag-shopping"></i>
          </div> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
