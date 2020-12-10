import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";

import Layout from "./src/components/Layout";
import BlogCard from "./src/components/BlogCard";
import Paragraph from "./src/components/Paragraph";
import blogsMeta from "./src/blogs/blogs-meta.json";

const Blogs = () => {
  return (
    <Layout>
      <Container>
        <Header as="h1">Latest Blogs</Header>
        <Divider />
        <Paragraph>Here are my latest blogs:</Paragraph>
        {blogsMeta.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </Container>
    </Layout>
  );
};

export default Blogs;
