import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import personalImage from "../images/botte.jpg";
import { MediaContextProvider, Media } from "./Media";

const BioResponsive = ({ mobile }) => {
  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Bio
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Velit nisi irure occaecat duis tempor minim mollit commodo nulla
              est nulla eiusmod qui. Eu eiusmod aliquip reprehenderit est aute
              excepteur magna deserunt veniam amet. Et anim tempor laboris nisi
              pariatur ex exercitation non. Aliqua proident duis aliquip irure
              aliquip. Aliqua voluptate non dolor voluptate aliqua ipsum dolore
              ut amet eiusmod sit fugiat. Sint quis nostrud labore commodo. Sint
              nostrud in aliquip aute. Exercitation reprehenderit proident elit
              consequat.
            </p>
          </Grid.Column>
          {!mobile && (
            <Grid.Column floated="right" width={6}>
              <Image size="medium" circular src={personalImage} />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

const BioDesktop = () => <BioResponsive />;
const BioMobile = () => <BioResponsive mobile />;

const Bio = () => (
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <BioDesktop />
    </Media>
    <Media at="mobile">
      <BioMobile />
    </Media>
  </MediaContextProvider>
);

export default Bio;
