import React, { useState, useEffect } from "react";
import { Header, Container } from "semantic-ui-react";

import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import blogsMeta from "../blogs/blogs-meta.json";

const Blogs = () => {
  return (
    <Layout>
      <Container>
        <Header as="h2">Latest blogs</Header>
        {blogsMeta.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Container>
    </Layout>
  );
};

export default Blogs;
