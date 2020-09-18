import Code from "./Code";
import MathMD from "./MathMD";
import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import BlogLayout from "./BlogLayout";

const MyParagraph = ({ children }) => (
  <p style={{ fontSize: "1.33em" }}>{children}</p>
);

class BlogMD extends Component {
  constructor(props) {
    super(props);
    const blogMeta = require("../blogs/blogs-meta.json").find(
      (blog) => blog.id === props.id
    );
    this.fileName = blogMeta.file;
    this.state = { md: "", err: false };
  }

  componentWillMount() {
    const filePath = require("../blogs/" + this.fileName);
    fetch(filePath)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      })
      .catch(() => {
        this.setState({ err: true });
      });
  }

  render() {
    let { md } = this.state;

    return (
      <BlogLayout>
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
