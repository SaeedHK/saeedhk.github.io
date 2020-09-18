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

    this.state = { md: "" };
  }

  componentWillMount() {
    const filePath = require("../blogs/blog1.md");
    fetch(filePath)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
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
