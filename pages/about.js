import PropTypes from "prop-types";
import React from "react";
import { Header, Image, Container } from "semantic-ui-react";
import { MediaContextProvider, Media } from "./src/components/Media";
import Layout from "./src/components/Layout";
import Paragraph from "./src/components/Paragraph";
import img from "./src/images/cube1.svg";

const AboutWrapper = ({ mobile, children }) => {
  if (mobile) {
    return <Container>{children}</Container>;
  } else {
    return (
      <Container textAlign="justified">
        <Image src={img} size="medium" floated="right" />

        {children}
      </Container>
    );
  }
};

const ResponsiveAbout = ({ mobile }) => (
  <AboutWrapper mobile={mobile}>
    <Header as="h1" content="Bio" />
    <Paragraph>
      I abseloutly don't know who I am. The thing I know is that I did some
      studies in maths and physics and has some experiences in software
      engineer. I used to do some music, Piano and classical Guitar, fell in
      love in{" "}
      <a href="https://www.youtube.com/watch?v=7O8-1xUNsXM">Iranian Music</a>{" "}
      and tried some{" "}
      <a href="https://www.youtube.com/watch?v=b_SSrzMBHCA">Settar</a>. I am a
      family man and have a daughter, I love my family and my parents. I love my
      friends, we have spent many hours together talking about the reason of
      life, more or less in the same spirit as{" "}
      <a href="https://www.youtube.com/watch?v=aS1esgRV4Rc">
        Dead Poets Society
      </a>
      .
      <br />
      <br />
      But do these all represent me? I don't know.
    </Paragraph>
  </AboutWrapper>
);

ResponsiveAbout.propTypes = {
  mobile: PropTypes.bool,
};

const About = () => (
  <Layout footerPosition="fixed">
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
