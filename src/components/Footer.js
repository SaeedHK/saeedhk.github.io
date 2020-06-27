import React from "react";
import { Container, Icon, Segment } from "semantic-ui-react";
const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ padding: "3em 0em" }}
    textAlign="center"
    id="footer"
  >
    <Container textAlign="center">
      <Icon link name="instagram" size="big" />
      <Icon link name="twitter" size="big" />
    </Container>
  </Segment>
);

export default Footer;
