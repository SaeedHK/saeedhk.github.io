import PropTypes from "prop-types";
import React from "react";
import { Header, Segment, Image, Grid, Container } from "semantic-ui-react";
import { MediaContextProvider, Media } from "./Media";
import Layout from "./Layout";
import Paragraph from "./Paragraph";
import backgroundSVG from "../images/background.svg";
import personalImageFile from "../images/saeed123.jpg";

const PersonalImage = ({ mobile }) => {
  if (mobile)
    return <Image src={personalImageFile} centered rounded size="small" />;
  else return <Image src={personalImageFile} centered rounded size="medium" />;
};

const AboutWrapper = ({ mobile, children }) => {
  if (mobile) {
    return (
      <Container>
        <PersonalImage mobile />
        {children}
      </Container>
    );
  } else {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="left" width="10">
              {children}
            </Grid.Column>
            <Grid.Column width="6">
              <PersonalImage />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
};

const ResponsiveAbout = ({ mobile }) => (
  <AboutWrapper mobile={mobile}>
    <Header as="h1" content="Bio" />
    <Paragraph>
      Lobortis. Phasellus condimentum. Ut porttitor bibendum libero. Integer
      euismod lacinia velit. Donec velit justo, sodales varius, cursus sed,
      mattis a, arcu. Maecenas accumsan, sem iaculis egestas gravida, odio nunc
      aliquet dui, eget cursus diam purus vel augue. Donec eros nisi, imperdiet
      quis, volutpat ac, sollicitudin sed, arcu. Aenean vel mauris. Mauris
      tincidunt. Nullam euismod odio at velit. Praesent elit purus, porttitor
      id, facilisis in, consequat ut, libero. Morbi imperdiet, magna quis
      ullamcorper malesuada, mi massa pharetra lectus, a pellentesque urna urna
      id turpis. Nam posuere lectus vitae nibh. Etiam tortor orci, sagittis
      malesuada, rhoncus quis, hendrerit eget, libero. Quisque commodo nulla at.
    </Paragraph>
  </AboutWrapper>
);

ResponsiveAbout.propTypes = {
  mobile: PropTypes.bool,
};

const About = () => (
  <Layout footerPosition="fixed">
    <Segment
      style={{
        backgroundImage: `url(${backgroundSVG})`,
        backgroundRepeat: "no-repeat",
        minHeight: 150,
        padding: "1em 0em",
        marginBottom: "3em",
      }}
      vertical
    ></Segment>
    <MediaContextProvider>
      <Media greaterThan="mobile">
        <ResponsiveAbout />
      </Media>
      <Media at="mobile">
        <ResponsiveAbout mobile />
      </Media>
    </MediaContextProvider>
  </Layout>
);

export default About;
