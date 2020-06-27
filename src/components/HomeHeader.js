import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";
import Navbar from "./Navbar";

const HomeHeaderContent = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="یک فنجان قهوه با چاشنی حقوق"
      inverted
      style={{
        fontSize: mobile ? "1em" : "3em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="با من باشید با هفته ای یک پادکست"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        margin: mobile ? "0.5em" : "1.5em",
      }}
    />
  </Container>
);

HomeHeaderContent.propTypes = {
  mobile: PropTypes.bool,
};

const HomeHeader = () => (
  <Segment
    inverted
    color="teal"
    textAlign="center"
    style={{ minHeight: 700, padding: "1em 0em" }}
    vertical
  >
    <Navbar />
    <HomeHeaderContent />
  </Segment>
);

export default HomeHeader;
