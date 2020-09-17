import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu secondary style={{ margin: "0.5em 0em" }}>
      <Container>
        <Menu.Item as={NavLink} exact to="/">
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/blog">
          Blog
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/about">
          About
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/contact">
          Contact
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
