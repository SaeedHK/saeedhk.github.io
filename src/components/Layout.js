import React, { useState } from "react";

import { Container, Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Media, MediaContextProvider } from "./Media";

const twitterUrl = "https://twitter.com/hadikhanloo";
const linkedinUrl = "https://www.linkedin.com/in/saeed-hadikhanloo-24a46052/";
const githubUrl = "https://github.com/saeedhk";
const NavbarDesktop = () => {
  return (
    <Media greaterThan="mobile">
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
    </Media>
  );
};

const NavbarMobile = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Media at="mobile">
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as={NavLink} exact to="/">
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/blog">
          Blog
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/about">
          About
        </Menu.Item>
      </Sidebar>

      <Container>
        <Menu secondary size="large">
          <Menu.Item onClick={handleToggle} icon="sidebar" />

          <Menu.Menu position="right">
            <Menu.Item as="a" href={twitterUrl} icon="twitter" />
            <Menu.Item as="a" href={githubUrl} icon="github" />
            <Menu.Item as="a" href={linkedinUrl} icon="linkedin" />
          </Menu.Menu>
        </Menu>
      </Container>
    </Media>
  );
};

const Layout = ({ children }) => (
  <MediaContextProvider>
    <NavbarMobile />
    <NavbarDesktop />
    {children}
  </MediaContextProvider>
);

export default Layout;
