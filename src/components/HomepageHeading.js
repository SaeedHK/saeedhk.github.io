import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Header,
  Icon,
  Segment,
  Image,
  Grid,
  Container,
} from "semantic-ui-react";
import * as d3 from "d3";
import { MediaContextProvider, Media } from "./Media";
import LogoImage from "../images/me.svg";
import { NavLink } from "react-router-dom";
import backgroundSVG from "../images/background.svg";

const onImageHover = () => {
  var icon = d3.select("#home-img");

  const timeSteps = 50;
  const duration = 15;
  const transXRange = 3;
  const transYRange = 3;
  const scaleRange = 0;

  const timeAdapt = function (t, range) {
    var timeEffect = 1 - t / timeSteps;
    return range * timeEffect;
  };

  for (var t = 0; t < timeSteps; t++) {
    //var angle = d3.randomUniform(-45, 45)();
    var angle = 0;
    var adaptedScaleRange = timeAdapt(t, scaleRange);
    var adaptedTransXRange = timeAdapt(t, transXRange);
    var adaptedTransYRange = timeAdapt(t, transYRange);
    var scale = d3.randomUniform(
      1 - adaptedScaleRange,
      1 + adaptedScaleRange
    )();
    var translateX = d3.randomUniform(
      -adaptedTransXRange,
      adaptedTransXRange
    )();
    var translateY = d3.randomUniform(
      -adaptedTransYRange,
      adaptedTransYRange
    )();
    icon = icon
      .transition()
      .style(
        "transform",
        `translateX(${translateX}px) translateY(${translateY}px) rotate(${angle}deg) scale(${scale})`
      )
      .duration(duration);
  }
};

const Logo = ({ mobile }) => {
  if (mobile)
    return (
      <Image
        src={LogoImage}
        centered
        style={{
          width: `50%`,
          opacity: `0.2`,
        }}
      />
    );
  else
    return (
      <Image
        src={LogoImage}
        centered
        size="medium"
        id="home-img"
        onMouseEnter={onImageHover}
      />
    );
};

const HeaderText = ({ mobile }) => (
  <div>
    <Header
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    >
      Hello. I'm Saeed.
      <br />
      This is my personal page where I would like to share some ideas.
    </Header>
    <Button color="teal" size="large" as={NavLink} exact to="/blog">
      Checkout my blogs
      <Icon name="right arrow" />
    </Button>
  </div>
);

const HeaderWrapper = ({ mobile }) => {
  if (mobile) {
    return (
      <Container text style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>
        <HeaderText mobile />
        <br />
        <Logo mobile />
      </Container>
    );
  } else {
    return (
      <Grid container style={{ marginTop: "10%" }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="left" width="12">
            <HeaderText />
          </Grid.Column>
          <Grid.Column width="4">
            <Logo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

const ResponsiveHomepageHeading = ({ mobile }) => (
  <Segment
    textAlign={mobile ? "center" : null}
    style={{
      backgroundImage: `url(${backgroundSVG})`,
      height: "100%",
      width: "100%",
      position: "absolute",
    }}
    vertical
  >
    <HeaderWrapper mobile={mobile} />
  </Segment>
);

ResponsiveHomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const HomepageHeading = () => (
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <ResponsiveHomepageHeading />
    </Media>
    <Media at="mobile">
      <ResponsiveHomepageHeading mobile />
    </Media>
  </MediaContextProvider>
);

export default HomepageHeading;
