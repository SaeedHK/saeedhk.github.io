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
import { MediaContextProvider, Media } from "./Media";
import LogoImage from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import backgroundSVG from "../images/background.svg";

const Logo = ({ mobile }) => {
  if (mobile) return <Image src={LogoImage} centered size="tiny" />;
  else return <Image src={LogoImage} centered size="medium" />;
};

const HeaderWrapper = ({ mobile, children }) => {
  if (mobile) {
    return (
      <Container text style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>
        <Logo mobile />
        {children}
      </Container>
    );
  } else {
    return (
      <Container style={{ marginTop: "10%" }}>
        <Grid style={{ width: "1100px" }}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width="4">
              <Logo />
            </Grid.Column>
            <Grid.Column textAlign="left" width="12">
              {children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
};

const ResponsiveHomepageHeading = ({ mobile }) => (
  <Segment
    textAlign={mobile ? "center" : null}
    style={{
      backgroundImage: `url(${backgroundSVG})`,
      backgroundRepeat: "no-repeat",
      minHeight: mobile ? 350 : 676,
      padding: "1em 0em",
    }}
    vertical
  >
    <HeaderWrapper mobile={mobile}>
      <Header
        as="h1"
        content="Saeed Hadikhanloo"
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
        }}
      />
      <Header
        as="h2"
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      >
        I am a developer and a mathematician.
        <br />I would like to share my ideas through this page.
      </Header>
      <Button primary size="huge" as={NavLink} exact to="/blog">
        Checkout my blogs
        <Icon name="right arrow" />
      </Button>
    </HeaderWrapper>
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
