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
  const title = blogMeta ? blogMeta.title : null;
  const author = blogMeta ? blogMeta.author : null;
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
      setMD(
        "#Error \n The blog is not found. Use the blog links appeared in the blog list."
      );
    }
  }, [fileName]);

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
};

export default BlogPost;
