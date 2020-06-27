import React from "react";
import { Header, Segment } from "semantic-ui-react";

const About = () => (
  <Segment style={{ padding: "4em 0em" }} vertical id="about">
    <Header as="h1" textAlign="center">
      درباره من
    </Header>
    <Header as="h4" textAlign="center">
      من هادی وحید هستم.
    </Header>
  </Segment>
);

export default About;
