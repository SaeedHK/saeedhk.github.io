import React from "react";
import { Header, Container, Divider, Segment } from "semantic-ui-react";
import Layout from "./Layout";
import backgroundSVG from "../images/background.svg";

const BlogLayout = ({ title, author, children }) => (
  <Layout>
    <Segment
      style={{
        backgroundImage: `url(${backgroundSVG})`,
        backgroundRepeat: "no-repeat",
        minHeight: 75,
        padding: "1em 0em",
        marginBottom: "3em",
      }}
      vertical
    />
    <Container>
      <Header as="h1">
        {title}
        <Header.Subheader content={author} />
      </Header>
      <Divider />
      {children}
    </Container>
  </Layout>
);

export default BlogLayout;
