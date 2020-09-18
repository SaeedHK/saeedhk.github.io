import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import Layout from "./Layout";

const BlogLayout = ({ title, author, children }) => (
  <Layout>
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
