import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <Navbar expand="lg" bg="primary">
        <Navbar.Brand href="/" style={{ color: "black !important" }}>
          Quiz Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Сайт для проходження квестів</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
        <Outlet />
      </div>
      <footer className="bg-dark text-light py-3">
        <Container>
          <p className="mb-0 text-center">
            © {new Date().getFullYear()} Quiz Site. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;
