import React from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';

import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import Paragraph from '../components/Paragraph';
import blogsMeta from '../blogs/blogs-meta.json';

const Blogs = () => {
  return (
    <Layout>
      <Container>
        <Header as="h1">Latest Blogs</Header>
        <Divider />
        <Paragraph>Here are my latest blogs:</Paragraph>
        {blogsMeta
          .filter((blog) => blog.published)
          .map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
      </Container>
    </Layout>
  );
};

export default Blogs;
