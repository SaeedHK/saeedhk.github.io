import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { Header, Container, Divider } from "semantic-ui-react";

import Layout from "../components/Layout";
import Code from "../components/Code";
import MathMD from "../components/MathMD";
import Paragraph from "../components/Paragraph";
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

class Blog extends Component {
  constructor(props) {
    super(props);
    const blogMeta = blogsMeta.find((blog) => blog.id === props.id);
    this.fileName = blogMeta ? blogMeta.file : null;
    this.title = blogMeta ? blogMeta.title : null;
    this.author = blogMeta ? blogMeta.author : null;
    this.state = { md: "", err: false };
  }

  componentWillMount() {
    if (this.fileName) {
      const filePath = require("../blogs/" + this.fileName);
      fetch(filePath)
        .then((res) => res.text())
        .then((md) => {
          this.setState({ md });
        });
    } else {
      this.setState({
        err: true,
        md:
          "#Error \n The blog is not found. Use the blog links appeared in the blog list.",
      });
    }
  }

  render() {
    let { md } = this.state;

    return (
      <BlogLayout title={this.title} author={this.author}>
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
  }
}

export default Blog;
