import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Header, Container, Divider } from "semantic-ui-react";

import Layout from "./Layout";
import Code from "./Code";
import MathMD from "./MathMD";
import Paragraph from "./Paragraph";
import blogsMeta from "../blogs/blogs-meta.json";

const BlogLayout = ({ title, author, children }) => (
  <Layout>
    <Container textAlign="justified">
      <Header as="h1">
        {title}
        <Header.Subheader content={author} />
      </Header>
      <Divider />
      {children}
    </Container>
  </Layout>
);

const BlogPost = () => {
  const { id } = useParams();
  const blogMeta = blogsMeta.find((blog) => blog.id === id);
  const fileName = blogMeta ? blogMeta.file : null;
  const title = blogMeta ? blogMeta.title : "Blog not found !";
  const author = blogMeta ? blogMeta.author : null;
  const hasMD = blogMeta ? blogMeta.hasMD : false;
  const [md, setMD] = useState("");

  useEffect(() => {
    if (fileName) {
      const filePath = require("../blogs/" + fileName);
      fetch(filePath)
        .then((res) => res.text())
        .then((md) => {
          setMD(md);
        });
    } else {
      setMD("<p>Please use the links appear on the blog page.</p>");
    }
  }, [fileName, hasMD]);

  if (hasMD)
    return (
      <BlogLayout title={title} author={author}>
        <Markdown
          options={{
            overrides: {
              Code: {
                component: Code,
              },
              Math: {
                component: MathMD,
              },
              math: {
                component: ({ children }) => <MathMD inline>{children}</MathMD>,
              },
              p: {
                component: Paragraph,
              },
            },
          }}
        >
          {md}
        </Markdown>
      </BlogLayout>
    );
  else {
    const blog = require("../blogs/" + fileName);
    return blog.default();
  }
};

export default BlogPost;
