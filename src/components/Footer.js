import React from "react";
import { Container, Segment, Icon } from "semantic-ui-react";
import { MediaContextProvider, Media } from "./Media";

const FooterResponsive = () => {
  const twitterUrl = "https://twitter.com/hadikhanloo";
  const linkedinUrl = "https://www.linkedin.com/in/saeed-hadikhanloo-24a46052/";
  const githubUrl = "https://github.com/saeedhadikhanloo";
  const IconedLink = ({ icon, url }) => (
    <Icon
      link
      name={icon}
      size="big"
      onClick={() => {
        window.open(url);
        return false;
      }}
    />
  );

  return (
    <Segment
      vertical
      style={{
        padding: "1.5em 0em",
        background: "#88d1c7",
        width: "100%",
      }}
      textAlign="center"
      id="footer"
    >
      <Container textAlign="center">
        <IconedLink icon="twitter" url={twitterUrl} />
        <IconedLink icon="linkedin" url={linkedinUrl} />
        <IconedLink icon="github" url={githubUrl} />
      </Container>
    </Segment>
  );
};

const FooterDesktop = () => <FooterResponsive />;
const FooterMobile = () => <FooterResponsive mobile />;

const Footer = () => (
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <FooterDesktop />
    </Media>
    <Media at="mobile">
      <FooterMobile />
    </Media>
  </MediaContextProvider>
);

export default Footer;
