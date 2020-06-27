import React from "react";
import { Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu secondary inverted size="large">
      <Container>
        <Menu.Item as="a" onClick={() => handleClick("podcasts")}>
          پﺍﺩ
        </Menu.Item>
        <Menu.Item as="a" onClick={() => handleClick("about")}>
          ﺩﺮﺑﺍﺮﻫ ﻢﻧ
        </Menu.Item>
        <Menu.Item as="a" onClick={() => handleClick("support")}>
          ﺢﻣﺍیﺕ
        </Menu.Item>
      </Container>
    </Menu>
  );
};

function handleClick(id) {
  document.querySelector("#" + id).scrollIntoView({ behavior: "smooth" });
}

export default Navbar;
