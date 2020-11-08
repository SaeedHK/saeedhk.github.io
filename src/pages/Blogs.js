import React from "react";
import { Header, Container, Image } from "semantic-ui-react";

import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import Paragraph from "../components/Paragraph";
import blogsMeta from "../blogs/blogs-meta.json";
import img from "../images/Turning-Square.svg";

const Blogs = () => {
  return (
    <Layout>
      <Container>
        <Paragraph>
          <Image src={img} size="medium" floated="right" />
          Writing Blog Eu mi non augue iaculis facilisis. Morbi interdum. Donec
          nisi arcu, rhoncus ac, vestibulum ut, pellentesque nec, risus.
          Maecenas tempus facilisis neque. Nulla mattis odio vitae tortor. Fusce
          iaculis. Aliquam rhoncus, diam quis tincidunt facilisis, sem quam
          luctus augue, ut posuere neque sem vitae neque. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nunc faucibus posuere turpis. Sed laoreet, est sed gravida tempor,
          nibh enim fringilla quam, et dapibus mi enim sit amet risus. Nulla
          sollicitudin eros sit amet diam. Aliquam ante. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut
          et est.
        </Paragraph>
        <Paragraph>
          Writing Blog Eu mi non augue iaculis facilisis. Morbi interdum. Donec
          nisi arcu, rhoncus ac, vestibulum ut, pellentesque nec, risus.
          Maecenas tempus facilisis neque. Nulla mattis odio vitae tortor. Fusce
          iaculis. Aliquam rhoncus, diam quis tincidunt facilisis, sem quam
          luctus augue, ut posuere neque sem vitae neque. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nunc faucibus posuere turpis. Sed laoreet, est sed gravida tempor,
          nibh enim fringilla quam, et dapibus mi enim sit amet risus. Nulla
          sollicitudin eros sit amet diam. Aliquam ante. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut
          et est.
        </Paragraph>
        <Header as="h2">Latest Blogs</Header>
        {blogsMeta.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Container>
    </Layout>
  );
};

export default Blogs;
