import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const twitterUrl = "https://twitter.com/hadikhanloo";
  const linkedinUrl = "https://www.linkedin.com/in/saeed-hadikhanloo-24a46052/";
  const githubUrl = "https://github.com/saeedhk";
  return (
    <Menu secondary style={{ margin: "1.5em 0em" }}>
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

        <Menu.Menu position="right">
          <Menu.Item as="a" href={twitterUrl} icon="twitter" />
          <Menu.Item as="a" href={githubUrl} icon="github" />
          <Menu.Item as="a" href={linkedinUrl} icon="linkedin" />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
