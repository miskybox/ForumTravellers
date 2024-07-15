//Header.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Weather from "./Weather";
import { useAuth } from "../context/UseAuth";
import "../styles/App.css";
import CarouselBackground from "../components/Carousel";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="relative background-custom" id="/">
      <Navbar expand="lg" className="justify-content-between mb-0">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab"
                className="w-64 h-auto mb-10"
                alt="Logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/forum">
                <Nav.Link>Forum</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title={user ? user.username : "Log In"}
                id="basic-nav-dropdown"
              >
                {!user ? (
                  <>
                    <LinkContainer to="/login">
                      <NavDropdown.Item>Login</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <NavDropdown.Item>Sign Up</NavDropdown.Item>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to={`/profile/${user.username}`}>
                      <NavDropdown.Item>User</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <Weather />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex flex-col items-center justify-center h-half-screen mb-0">
        <CarouselBackground />
      </div>
    </div>
  );
};

export default Header;