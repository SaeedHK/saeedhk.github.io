import Code from "./Code";
import MathMD from "./MathMD";
import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import BlogLayout from "./BlogLayout";
import blogsMeta from "../blogs/blogs-meta.json";

const MyParagraph = ({ children }) => (
  <p style={{ fontSize: "1.33em" }}>{children}</p>
);

class BlogMD extends Component {
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
          children={md}
          options={{
            overrides: {
              Code: {
                component: Code,
              },
              Math: {
                component: MathMD,
              },
              p: {
                component: MyParagraph,
              },
            },
          }}
        />
      </BlogLayout>
    );
  }
}

export default BlogMD;
