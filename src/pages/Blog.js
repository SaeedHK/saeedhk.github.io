import React, { useState, useEffect } from "react";
import { Header, Container } from "semantic-ui-react";

import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import blogsMeta from "../blogs/blogs-meta.json";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => setBlogs(blogsMeta));

  return (
    <Layout>
      <Container>
        <Header as="h2">Latest blogs</Header>
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;
